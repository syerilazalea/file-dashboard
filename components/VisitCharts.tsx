"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

// Contoh data jumlah visit para dokter
const data = [
  { name: "Dr. A", visits: 11 },
  { name: "Dr. B", visits: 10 },
  { name: "Dr. C", visits: 9 },
  { name: "Dr. D", visits: 8 },
  { name: "Dr. E", visits: 7 },
  { name: "Dr. F", visits: 6 },
  { name: "Dr. G", visits: 5 },
];

const colors = [
  "#38bdf8", // paling banyak
  "#60a5fa",
  "#3b82f6",
  "#2563eb",
  "#1d4ed8", // paling sedikit
];

const VisitCharts = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:border-gray-300 transition-all">
      <h2 className="text-gray-800 text-lg font-semibold mb-4">Visits Per Nakes</h2>
      <p className="text-white text-opacity-80 mb-6">Distribution of visits</p>
      <div className="w-full h-64 flex justify-center">
        <ResponsiveContainer width="95%" height="100%">
          <BarChart data={data}>
            {/* Tidak pakai CartesianGrid supaya tidak ada garis */}
            <XAxis dataKey="name" stroke="#cbd5e1" axisLine={false} tickLine={false} />
            <YAxis stroke="#cbd5e1" axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{ backgroundColor: "#334155", border: "none" }}
              itemStyle={{ color: "#38bdf8" }}
            />
            <Bar 
              dataKey="visits" 
              radius={[10, 10, 0, 0]} 
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VisitCharts;
