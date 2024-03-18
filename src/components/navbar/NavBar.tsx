import logo_alienblaster from '../../assets/logo_alienblaster.png'
import './NavBar.css'
import SoundSlider001 from '../sliders/SoundSlider001';
import { IconButton } from '@mui/material';


const NavBar = () => {
  return (
    <nav className="navbar">
         <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
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
          <li>
            <a href="/signin">Sign In</a>
          </li>
          <li>
            <a href="/butler">Butler</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/brainspace">BrainSpace</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;