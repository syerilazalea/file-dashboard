"use client";
import React from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface StatCardProps {
  name: string;
  icon: LucideIcon;
  value: string | number;
}

const StatCard: React.FC<StatCardProps> = ({ name, icon: Icon, value }) => {
  return (
    <motion.div
      whileHover={{ 
        y: -5, 
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" 
      }}
    >
      <div className="bg-white overflow-hidden shadow-lg rounded-xl border border-gray-200">
        <div className="px-4 py-5 sm:p-6">
          <span className="flex items-center text-sm font-medium text-gray-800">
            <Icon size={20} className="mr-2" />
            {name}
          </span>
          <p className="mt-1 text-3xl font-semibold text-gray-900">{value}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default StatCard;
