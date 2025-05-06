"use client"

import StatCard from "../../../components/StatCard";
import { MapPin, Footprints, UserCheck, Wallet } from 'lucide-react';
import React from 'react';
import { motion } from "framer-motion";
import DistanceChart from "../../../components/DistanceChart";
import VisitChart from "../../../components/VisitCharts";
import NakesTravel from "../../../components/NakesTravel";
import PieChart from "../../../components/PieChart";

const OverviewPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
        <main className='max-w-7xl mx-auto py-4 px-4 lg:px-8'>
            <motion.div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
            initial={{ opacity: 0, y: 20}} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            >
            
                <StatCard name="Avg. Distance Per Nakes" icon={MapPin} value="12.4km" />
                <StatCard name="Total Daily Distance" icon={Footprints} value="248.6 km" />
                <StatCard name="Avg. Visits Per Nakes" icon={UserCheck} value="8.2" />
                <StatCard name="Potential Cost Savings" icon={Wallet} value="Rp 4.2M" />
            </motion.div>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-2">
                <DistanceChart />
              </div>
              <div className="col-span-1">
                <VisitChart />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-8">
              <div className="col-span-2">
                <NakesTravel />
              </div>
              <div className="col-span-1">
                <PieChart />
              </div>
            </div>

        </main>
      
    </div>
  )
}

export default OverviewPage
