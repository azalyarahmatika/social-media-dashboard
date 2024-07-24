import Image from "next/image";
import { Inter } from "next/font/google";
import Dashboard from "@/components/Dashboard";
import Overview from "@/components/Overview";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Dashboard />
      <Overview />
    </div>
  );
}
