import AppLogo from '../AppLogo'
import Hamburger from '../Hamburger'
import './Navbar.sass'

const Navbar = () => (
  <nav className="nav">
    <div className="container nav__container">
      <div className="nav__brand">
        <AppLogo />
      </div>
      <div className="nav__menu">
        <div className="nav__menu__item">About us</div>
        <div className="nav__menu__item">Projects</div>
        <div className="nav__menu__item">Career</div>
        <div className="nav__menu__item">Contact</div>
      </div>
      <div className="nav__tail">En</div>
      <div className="nav__toggle">
        <Hamburger />
      </div>
    </div>
  </nav>
)

export default Navbar
