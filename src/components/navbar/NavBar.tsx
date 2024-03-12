import logo_alienblaster from '../../assets/logo_alienblaster.png'
import './NavBar.css'
import SoundSlider001 from '../sliders/SoundSlider001';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


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
            <MenuIcon />
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
            <a href="/Butler">Butler</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavBar;