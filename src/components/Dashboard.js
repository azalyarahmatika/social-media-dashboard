import DashboardTitle from "./DashboardTitle";
import DashboardCard from "./DashboardCard";

function Dashboard({theme, toggleDarkMode}) {
  return (
    <div className="relative z-10">
      <div className="flex pb-8">
        <DashboardTitle toggleDarkMode={toggleDarkMode} />
      </div>
      
      <DashboardCard />
    </div>
  )
}

export default Dashboard;