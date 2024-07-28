import Image from "next/image";
import { Inter } from "next/font/google";
import Dashboard from "@/components/Dashboard";
import Overview from "@/components/Overview";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [theme, setTheme] = useState(true);

  const toggleDarkMode = () => {
    setTheme(!theme);
  }

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="h-full">
      <div className={`${theme ? "bg-[#20222F]" : "bg-[#F8F9FD]"} absolute h-64 w-full top-0 rounded-b-3xl`}></div>

      <div className={`min-h-screen z-10 py-12 font-inter flex flex-col justify-center items-center ${theme ? "bg-[#1D202B]" : "bg-white"}`}>
        <Dashboard theme={theme} toggleDarkMode={toggleDarkMode} />
        <Overview />
      </div>
    </div>  
  );
}