import DashboardTitle from "./DashboardTitle";
import DashboardCard from "./DashboardCard";

function Dashboard() {
  return (
    <div>
      <div className="flex pb-8">
        <DashboardTitle />
      </div>
      
      <DashboardCard />
    </div>
  )
}

export default Dashboard;