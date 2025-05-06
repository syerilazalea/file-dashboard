"use client";
import React from "react";

const travelData = [
  { nama: "Dr. Andi", role: "Dokter umum", distance: "12 km", visits: "8", efficiency: 92},
  { nama: "Dr. Siti", role: "Perawat", distance: "15 km", visits: "8", efficiency: 88},
  { nama: "Dr. Budi", role: "Dokter Spesialis", distance: "8.7 km" , visits: "5", efficiency: 95},
];

const Card = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-gray-800 text-lg font-semibold mb-4">Nakes Travel Efficiency</h2>
      <div className="w-full h-64 flex justify-center items-center">
        {/* pie chart */}
      </div>
    </div>
  );
};

export default Card;
