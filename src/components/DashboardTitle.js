import Toggle from "./Toggle";

function DashboardTitle() {
  return (
    <div className="flex justify-between w-full">
      <div className="font-inter text-white_text">
        <h1 className="text-2xl font-semibold">Social Media Dashboard</h1>
        <p className="pt-1 text-xs tracking-wide font-semibold text-desaturated_blue_text">Total Followers: 23,004</p>
      </div>

      <Toggle />
    </div>
    
  )
}

export default DashboardTitle;