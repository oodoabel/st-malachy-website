import React from "react";
import Link from "next/link";

const RemainingExecutivesCard = ({ count }: { count: number }) => {
  return (
    <div className="group relative flex h-full min-h-[208px] flex-col items-center justify-center overflow-hidden rounded-lg bg-gray-50 p-6 text-center shadow-md transition-all duration-300 hover:bg-gray-100 hover:shadow-lg">
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-blue-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </div>

      <h3 className="mb-2 text-lg font-semibold text-gray-800">
        +{count} More Leaders
      </h3>
      <p className="mb-4 text-sm text-gray-600">
        Meet our complete leadership team
      </p>

      <Link
        href="/about/executives"
        className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        View All Executives
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1 h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  );
};

export default RemainingExecutivesCard;
