export default function Events() {
  return (
    <div className="flex flex-col items-center justify-center mt-64 mainContainer">
      <div className="relative w-full h-[500px] flex items-center justify-center">
        <img
          src="/image/events/cover.png"
          alt="Events Cover"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <img
          src="/image/events/coverOverGradient.png"
          alt="Events Gradient Overlay"
          className="absolute inset-0 w-full h-full object-cover z-10"
        />
        <h1
          className="relative z-20 text-white text-7xl font-normal"
          style={{ fontFamily: "Gideon Roman, serif", letterSpacing: 2 }}
        >
          EVENTS
        </h1>
      </div>
      <div className="w-full flex justify-center items-center py-12 bg-[#F8F8F8] calendarWithEventsMainContainer">
        <div className="w-full max-w-6xl">
          <CalendarWithEvents />
        </div>
      </div>
    </div>
  );
}

import CalendarWithEvents from "./CalendarWithEvents";
