import DashboardTitle from "./DashboardTitle";
import DashboardCard from "./DashboardCard";

function Dashboard({toggleDarkMode}) {
  return (
    <div>
      <div className="flex pb-8">
        <DashboardTitle toggleDarkMode={toggleDarkMode} />
      </div>
      
      <DashboardCard />
    </div>
  )
}

export default Dashboard;