function Toggle() {
  return (
    <div class="flex justify-between items-center gap-2 mt-5 mb-6">
      <span class="text-desaturated_blue_text font-inter text-sm font-semibold">Dark Mode</span>
      <input type="checkbox" class="hidden" id="toggle" />
      <label for="toggle">
        <div class="w-9 h-5 bg-gradient-to-b from-toggle_from to-toggle_to rounded-full flex items-center justify-start p-0.5 cursor-pointer hover:opacity-70">
          <div class="h-4 w-4 bg-very_dark_blue_bg rounded-full toggle-circle"></div>
        </div>
      </label>
    </div>
  )
}

export default Toggle;