"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { House, Users, Locate, Route, Settings, Menu } from "lucide-react";

const ICONS = {
  House,
  Users,
  Locate,
  Route,
  Settings,
};

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarItems, setSidebarItems] = useState<any[]>([]);
  const [isMobile, setIsMobile] = useState(false); // tambah: cek device kecil
  const pathname = usePathname();

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => setSidebarItems(data.sidebarItems));
  }, []);

  useEffect(() => {
    // Fungsi cek ukuran layar
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind breakpoint md: 768px
    };

    handleResize(); // Cek saat pertama kali render
    window.addEventListener("resize", handleResize); // Update saat window resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Kalau mobile, sidebar selalu kecil
  const sidebarWidth = isMobile ? "w-20" : isSidebarOpen ? "w-64" : "w-20";

  return (
    <div className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${sidebarWidth}`}>
      <div className="h-full bg-[#1e1e1e] backdrop-blur-md p-4 flex flex-col border-r border-[#2f2f2f]">
        <button
          onClick={() => !isMobile && setSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-[#2f2f2f] transition-colors max-w-fit cursor-pointer text-white"
        >
          <Menu size={24} />
        </button>

        <nav className="mt-8 flex-grow">
          {sidebarItems.map((item) => {
            const IconComponent = ICONS[item.icon];
            if (!IconComponent) return null;

            return (
              <Link key={item.name} href={item.href}>
                <div
                  className={`flex items-center p-4 text-sm font-medium rounded-lg hover:bg-[#2f2f2f] transition-colors mb-2 text-white ${
                    pathname === item.href ? "bg-[#2f2f2f]" : ""
                  }`}
                >
                  <IconComponent size={20} style={{ minWidth: "20px" }} />
                  {/* Nama hanya muncul kalau sidebar buka dan bukan di mobile */}
                  {!isMobile && isSidebarOpen && (
                    <span className="ml-4 whitespace-nowrap">{item.name}</span>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
#2f2f2f]' 
                      : 'text-gray-800 hover:bg-gray-100'
                    } 
                    ${pathname === item.href 
                      ? isDarkMode ? 'bg-[#2f2f2f]' : 'bg-gray-100' 
                      : ''
                    }`}
                >
                  <IconComponent size={20} style={{ minWidth: "20px" }} />
                  {!isMobile && isSidebarOpen && (
                    <span className="ml-4 whitespace-nowrap">{item.name}</span>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
