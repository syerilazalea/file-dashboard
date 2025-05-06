"use client";
import React from "react";

const travelData = [
  { nama: "Dr. Andi", role: "Dokter umum", distance: "12 km", visits: "8"},
  { nama: "Dr. Siti", role: "Perawat", distance: "15 km", visits: "8"},
  { nama: "Dr. Budi", role: "Dokter Spesialis", distance: "8.7 km" , visits: "5"},
];

const NakesTravel = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:border-gray-300 transition-all">
      <h2 className="text-gray-800 text-lg font-semibold mb-4">Nakes Travel Efficiency</h2>
      <div className="w-full h-64 flex justify-center">
        <div className="overflow-x-auto w-full rounded-lg scrollbar-thumb-gray-400 scrollbar-track-transparent hover:scrollbar-thumb-gray-300 transition-all">
          <table className="min-w-[600px] text-gray-800">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-sm px-6 py-3 text-left font-semibold text-white">Name</th>
                <th className="text-sm px-6 py-3 text-left font-semibold text-white">Role</th>
                <th className="text-sm px-6 py-3 text-left font-semibold text-white">Avg. Distance</th>
                <th className="text-sm px-6 py-3 text-left font-semibold text-white">Visits</th>
                <th className="text-sm px-6 py-3 text-left font-semibold text-white">Efficiency</th>
              </tr>
            </thead>
            <tbody>
              {travelData.map((data, index) => (
                <tr key={index} className="border-b border-gray-700 hover:bg-gray-700">
                  <td className="text-sm px-6 py-4 text-white">{data.nama}</td>
                  <td className="text-sm px-6 py-4 text-white">{data.role}</td>
                  <td className="text-sm px-6 py-4 text-white">{data.distance}</td>
                  <td className="text-sm px-6 py-4 text-white">{data.visits}</td>
                  <td className="text-sm px-6 py-4">
                    <button className="bg-blue-400 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition duration-200 ease-in-out">
                      92%
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NakesTravel;
