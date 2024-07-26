function Toggle({toggleDarkMode}) {
  return (
    <div className="flex justify-between items-center gap-2 mt-5 mb-6 group">
      <span className="text-desaturated_blue_text font-inter text-sm font-semibold group-hover:dark:text-white_text group-hover:text-very_dark_blue_text">Dark Mode</span>
      <input type="checkbox" className="hidden" id="toggle" />
      <label htmlFor="toggle" onClick={toggleDarkMode}>
        <div className="w-9 h-5 bg-gray-400 group-hover:bg-gradient-to-b dark:bg-gradient-to-b from-toggle_from to-toggle_to rounded-full flex items-center justify-start p-0.5 cursor-pointer opacity-85 dark:group-hover:opacity-100">
          <div className="h-4 w-4 dark:bg-very_dark_blue_bg bg-[#F8F9FD] rounded-full toggle-circle" 
          ></div>
        </div>
      </label>
    </div>
  )
}

export default Toggle;