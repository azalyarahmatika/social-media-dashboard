import Toggle from "./Toggle";

function DashboardTitle({toggleDarkMode}) {
  return (
    <div className="flex justify-between w-full flex-col lg:flex-row">
      <div className="font-inter dark:text-white_text text_very_dark_blue">
        <h1 className="text-2xl font-semibold ">Social Media Dashboard</h1>
        <p className="pt-1 text-xs tracking-wide font-semibold text-desaturated_blue_text">Total Followers: 23,004</p>
      </div>
      <hr className="lg:hidden mt-5 bg-dark_desaturated_blue_card_bg"></hr>
      <Toggle toggleDarkMode={toggleDarkMode}/>
    </div>
    
  )
}

export default DashboardTitle;