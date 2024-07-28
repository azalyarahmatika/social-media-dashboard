function Footer({theme}) {
  return (
    <div className="text-desaturated_blue_text font-inter text-sm pt-3 font-semibold">
      Challenge by <a className={`${theme ? "text-white" : "text-very_dark_blue_text"}`}  href="https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H/hub"target="_blank">Frontend Mentor</a>. 
      Coded by <a className={`${theme ? "text-white" : "text-very_dark_blue_text"}`} href="https://azalyarahmatika.com" target="_blank">Azalya Rahmatika</a>.
    </div>
  )
}

export default Footer;