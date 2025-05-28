import React from "react";

export default function ActivitiesCard({ title }) {
  return (
    <div className="relative w-full aspect-[4/5] rounded-t-full overflow-hidden shadow-2xl flex items-end group">
      <img
        src="/image/activities/ARTS.jpg"
        alt="Activity"
        className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-300 group-hover:scale-105"
        draggable={false}
      />
      <img
        src="/image/activities/activitiesCardBottomGradient.png"
        alt="Card Gradient"
        className="absolute bottom-0 left-0 w-full h-1/2 object-cover z-10 pointer-events-none"
        draggable={false}
      />
      <div
        className="relative z-20 w-full text-center pb-10 text-2xl md:text-3xl text-[#F6E7B2] font-normal px-16"
        style={{ fontFamily: "Gideon Roman, serif", letterSpacing: 1 }}
      >
        {title}
      </div>
    </div>
  );
}
