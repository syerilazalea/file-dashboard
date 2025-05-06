"use client";
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const DistanceChart = () => {
  const data = [
    { month: "Jan", distance: 0 },
    { month: "Feb", distance: 4 },
    { month: "Mar", distance: 8 },
    { month: "Apr", distance: 12 },
    { month: "May", distance: 16 },
    { month: "Jun", distance: 18 },
    { month: "Jul", distance: 18 },
    { month: "Aug", distance: 18 },
    { month: "Sep", distance: 18 },
    { month: "Oct", distance: 18 },
    { month: "Nov", distance: 18 },
    { month: "Dec", distance: 18 },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-gray-800 text-lg font-semibold">Travel Distance Trends</h2>
      <p className="text-gray-600 text-opacity-80 mb-6">Average daily travel distance per nakes over time</p>
      <div className="w-full h-64 flex justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
            <XAxis dataKey="month" stroke="#cbd5e1" />
            <YAxis domain={[0, 20]} stroke="#cbd5e1" />
            <Tooltip
              contentStyle={{ backgroundColor: "#334155", border: "none" }}
              itemStyle={{ color: "#38bdf8" }}
            />
            <Line type="monotone" dataKey="distance" stroke="#38bdf8" strokeWidth={3} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DistanceChart;
