import React, {useState} from 'react'
import images from '../../images/index'
import './header.scss'
const Header = () => {
  const [open, setOpen] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    setOpen(!open)

    // DISPLAY THE CLOSE BUTTON AND HIDE THE HAMBURGER
    const hamburgerBtn = document.querySelector('.hamburger')
    const closeBtn = document.querySelector('.close-btn')

    if (open){
      hamburgerBtn.style.display = 'block'
      closeBtn.style.display = 'none'
    } else {
      hamburgerBtn.style.display = 'none'
      closeBtn.style.display = 'block'
    }
  }

    return (
    <div>
      <header>
        <nav className="navbar container">
          <div className="logo">
            <img src={images.logo} alt="logo" />
          </div>
          <ul className={open ? 'nav-items active' : 'nav-items'}>
            <li>About</li>
            <li>Contact</li>
            <li>Portfolio</li>
            <li className="btn btn--nav-btn">View Plans</li>
            <img className="bg bg--nav-img" src={images.bg_pattern_mobile_nav}/>
          </ul>
          <div className="mobile-menu" onClick={handleClick}>
            <img className="hamburger" src={images.hamburger} alt="hamburger" />
            <img className="close-btn" src={images.close} alt="close" />
          </div>
        </nav>  
      </header>
    </div>
  )
}

export default Header