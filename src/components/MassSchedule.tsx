import React from "react";
const massTimes = [
  {
    day: "Sunday (Bosso)",
    time: "7:00 AM",
    note: "",
    color: "bg-gray-100 border-l-4 border-gray-500",
  },
  {
    day: "Sunday (GK)",
    time: "8:00 AM",
    note: "",
    color: "bg-gray-100 border-l-4 border-gray-500",
  },
  {
    day: "Tuesday (Gk)",
    time: "6:00 AM",
    note: "",
    color: "bg-gray-100 border-l-4 border-gray-500",
  },
  {
    day: "Wednesday (Bosso)",
    time: "6:00 PM",
    note: "Confession by 5:00PM",
    color: "bg-gray-100 border-l-4 border-amber-500",
  },
  {
    day: "Thursday (GK)",
    time: "6:00 PM",
    note: "Confession by 5:00PM",
    color: "bg-gray-100 border-l-4 border-amber-500",
  },
];

const MassSchedule = () => {
  return (
    <div>
      {/* Mass Times Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Mass Schedule</h2>
        <div className="grid gap-3">
          {massTimes.map((mass, index) => (
            <div
              key={index}
              className={`${mass.color} p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-semibold text-gray-800 block">
                    {mass.day}
                  </span>
                  {mass.note && (
                    <span className="text-sm text-amber-600 mt-1 block">
                      {mass.note}
                    </span>
                  )}
                </div>
                <span className="bg-white px-3 py-1 rounded-full text-md font-medium text-gray-700 shadow-inner">
                  {mass.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MassSchedule;
