"use client";

import React, { useState } from "react";
import "./CalendarWithEvents.css"

const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfWeek = (month, year) => new Date(year, month, 1).getDay();

const sampleEvents = [
  { date: "2025-05-25", title: "Sports Days" },
  { date: "2025-06-03", title: "Sports Days" },
  { date: "2025-10-11", title: "Sports Days" },
  { date: "2025-05-12", title: "Art & Music" },
];

function formatMonthYear(month, year) {
  return `Events for ${new Date(year, month).toLocaleString("default", {
    month: "long",
  })} ${year}`;
}

export default function CalendarWithEvents({
  month = 4, // May (0-indexed)
  year = 2025,
  events = sampleEvents,
}) {
  const [search, setSearch] = useState("");
  const filteredEvents = events.filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase())
  );
  const days = daysInMonth(month, year);
  const firstDay = getFirstDayOfWeek(month, year);
  const today = `${year}-${String(month + 1).padStart(2, "0")}-${String(
    new Date().getDate()
  ).padStart(2, "0")}`;

  // Build calendar grid
  const calendar = [];
  let day = 1;
  for (let i = 0; i < 6; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < firstDay) || day > days) {
        week.push(null);
      } else {
        week.push(day);
        day++;
      }
    }
    calendar.push(week);
  }

  // Helper to check if a day has an event
  const getEventForDay = (d) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      d
    ).padStart(2, "0")}`;
    return events.find((e) => e.date === dateStr);
  };

  return (
    <div
      className="w-full flex flex-col md:flex-row bg-[#F7F7F7] rounded-[56px] shadow-2xl overflow-hidden max-w-[1400px] mx-auto border-0"
      style={{ minHeight: 700, position: "relative", padding: 0 }}
    >
      {/* Header covers the whole top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 140,
          zIndex: 10,
          background: "linear-gradient(180deg, #085038 0%, #02A479 100%)",
          borderTopLeftRadius: 56,
          borderTopRightRadius: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "Gideon Roman, serif",
            fontWeight: 400,
            fontSize: "48px",
            lineHeight: "100%",
            letterSpacing: "-2%",
            textAlign: "center",
            color: "#FFFFFF",
            verticalAlign: "middle",
            width: "100%",
            margin: 0,
            padding: 0,
            userSelect: "none",
          }}
        >
          Events for May 2025
        </h2>
      </div>
      {/* Calendar Section */}
      <div
        className="flex-1 flex flex-col justify-center items-center bg-white rounded-bl-[56px] p-0 calendarContainer"
        style={{ padding: "150px 2em 0", background: "#f4f4f4" }}
      >
        <div
          className="w-full"
          style={{
            // borderRadius: 32,
            overflow: "hidden",
            overflowX: "auto",
            background: "#F7F7F7",
            // boxShadow: "0 2px 16px 0 rgba(0,0,0,0.03)",
            border: "none",
            padding: 0,
            margin: 0,
            maxWidth: 900,
          }}
        >
          <div
            className="grid grid-cols-7 gap-0 text-center"
            style={{
              borderRadius: 0,
              background: "none",
              boxShadow: "none",
              minWidth: 500,
              border: "none",
            }}
          >
            {["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"].map(
              (d, i) => (
                <div
                  key={d}
                  className="font-normal text-[#222] py-3 text-lg"
                  style={{
                    fontFamily: "Gideon Roman, serif",
                    background: i === 0 ? "White" : "white",
                    // borderTopLeftRadius: i === 0 ? 16 : 0,
                    // borderTopRightRadius: i === 6 ? 16 : 0,
                  }}
                >
                  {d}
                </div>
              )
            )}
            {calendar.flat().map((d, idx) => {
              const col = idx % 7;
              if (!d)
                return (
                  <div
                    key={idx}
                    className="h-20 bg-[#F4F4F4]"
                  />
                );
              const event = getEventForDay(d);
              const dateStr = `${year}-${String(month + 1).padStart(
                2,
                "0"
              )}-${String(d).padStart(2, "0")}`;
              const isToday = dateStr === today;
              // Highlight weekends and event days
              let cellStyle = {
                background: col === 0 ? "#FFECC0" : "white",
                borderRadius: 0,
                border: "1px solid #E6E6E6",
                fontFamily: "Gideon Roman, serif",
                fontWeight: 400,
                fontSize: "20px",
                color: "#222",
                position: "relative",
                minHeight: 80,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "12px 16px",
              };
              if (event) {
                cellStyle.background =
                  "linear-gradient(180deg, #085038 0%, #02A479 100%)";
                cellStyle.color = "#fff";
                cellStyle.fontWeight = 400;
                // cellStyle.borderRadius = 16;
                cellStyle.alignItems = "center";
                cellStyle.justifyContent = "center";
                cellStyle.fontSize = "20px";
                cellStyle.boxShadow = "0 4px 16px 0 rgba(8,80,56,0.10)";
              }
              return (
                <div key={idx} style={cellStyle}>
                  <span style={{ fontSize: 20 }}>{d}</span>
                  {event && (
                    <span
                      style={{
                        fontSize: 18,
                        marginTop: 8,
                        fontWeight: 400,
                        textAlign: "center",
                        width: "100%",
                      }}
                    >
                      {event.title}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Events List Section */}
      <div
        className="w-full md:w-[420px] flex flex-col justify-between rounded-br-[56px] border-0 listSectionContainer"
        style={{
          paddingTop: 140,
          paddingBottom: 40,
          paddingLeft: 0,
          paddingRight: 0,
          background: "#f4f4f4",
          position: "relative",
        }}
      >
        <div className="w-full px-8" style={{background: "#fff"}}>
          <div
            className="flex items-center gap-2 mb-6 mt-0"
            style={{
              background: "#DDF9F6",
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              padding: "18px 24px",
              margin: "-32px -32px 24px -32px",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <span
              className="text-2xl font-normal mt-10"
              style={{ fontFamily: "Gideon Roman, serif", color: "#085038" }}
            >
              🗓️ Events
            </span>
          </div>
          <input
            type="text"
            placeholder="Search Events...."
            className="rounded-xl px-4 py-3 border border-[#E6E6E6] mb-6 w-full focus:outline-none focus:ring-2 focus:ring-[#02A479] bg-white text-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ fontFamily: "Gideon Roman, serif" }}
          />
          <div className="flex-1 overflow-y-auto" style={{ maxHeight: 340 }}>
            {filteredEvents.length === 0 && (
              <div className="text-gray-400 text-center mt-8">
                No events found.
              </div>
            )}
            {filteredEvents.map((e, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white rounded-2xl shadow-sm mb-6 border border-[#E6E6E6] px-0 py-0"
                style={{ minHeight: 90 }}
              >
                <div
                  className="flex flex-col items-center justify-center min-w-[80px] h-full"
                  style={{
                    background: "#fff",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    height: 90,
                    width: 80,
                    padding: 0,
                    justifyContent: "flex-start",
                    alignItems: "center",
                    boxShadow: "0 2px 8px 0 rgba(8,80,56,0.08)",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: 36,
                      background:
                        "linear-gradient(180deg, #085038 0%, #02A479 100%)",
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      className="text-xs font-normal uppercase tracking-widest"
                      style={{
                        fontFamily: "Gideon Roman, serif",
                        fontSize: 20,
                        color: "#fff",
                        letterSpacing: 2,
                      }}
                    >
                      {new Date(e.date).toLocaleString("default", {
                        month: "short",
                      })}
                    </span>
                  </div>
                  <span
                    className="text-2xl font-normal text-[#222]"
                    style={{
                      fontFamily: "Gideon Roman, serif",
                      fontSize: 32,
                      marginTop: 2,
                      color: "#222",
                      lineHeight: 1.1,
                    }}
                  >
                    {String(new Date(e.date).getDate()).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex-1 pl-4 flex flex-col justify-center">
                  <div
                    className="font-normal text-[#222] text-xl"
                    style={{ fontFamily: "Gideon Roman, serif" }}
                  >
                    {e.title}
                  </div>
                  <div
                    className="text-xs text-[#222] mt-1"
                    style={{ fontFamily: "Gideon Roman, serif", fontSize: 16 }}
                  >
                    {new Date(e.date).toLocaleString("default", {
                      year: "numeric",
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end px-8 pb-8 pt-3">
          <button
            className="bg-[#085038] text-white rounded-xl px-8 py-3 font-normal text-lg hover:bg-[#02A479] transition-all shadow-none"
            style={{ fontFamily: "Gideon Roman, serif" }}
          >
            View More &gt;&gt;
          </button>
        </div>
      </div>
    </div>
  );
}
