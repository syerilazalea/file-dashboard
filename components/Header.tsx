import Image from "next/image";
import React from "react";
import { Filter } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-lg border-b border-gray-200 mx-4 sm:mx-6 lg:mx-8 mt-4 mb-2 rounded-lg">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 flex items-center justify-between">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
          Dashboard
        </h1>

        <div className="flex items-center space-x-3 sm:space-x-6">
          {/* tanggal range */}
          <div className="relative">
            <Filter className="w-5 sm:w-6 h-5 sm:h-6 text-gray-600 cursor-pointer hover:text-black" />
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* profile */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
