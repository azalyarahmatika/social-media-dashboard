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
    <div className={`py-12 font-inter flex justify-center items-center ${theme ? "custom_gradient_dark" : "custom_gradient_light"}`}>
      <div>
        <Dashboard toggleDarkMode={toggleDarkMode} />
        <Overview />
      </div>
    </div>
  );
}
