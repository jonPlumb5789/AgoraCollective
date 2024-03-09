import logo_alienblaster from '../../assets/logo_alienblaster.png'
import './NavBar.css'
import SoundSlider001 from '../sliders/SoundSlider001';


const NavBar = () => {
  return (
    <nav className="navbar">
        <div>
            <SoundSlider001 />      
        </div>
      <div className="navbar__logo">
        <img src={logo_alienblaster} alt="logo" />
      </div>
      <div className="navbar__menu">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;