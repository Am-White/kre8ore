import React from 'react';
import { AppBar, Toolbar, Typography, Box} from '@mui/material';
import { useNavigate  } from 'react-router-dom';
import { GiCrossedSwords } from "react-icons/gi";

const Header: React.FC = () => {
  const navigate = useNavigate();


  const handleHomeClick = (e) => {
    const handleHomeClick = (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
      navigate('/');
  };
  };


  const handleSectionClick = (section, e) => {
      e.preventDefault();
      navigate('/');
      setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
          } else {
              console.error(`Element with id ${section} not found.`);
          }
      }, 100);
  };

  const handleDropdownClick = (item, e) => {
      e.preventDefault();
      navigate('/');
      setTimeout(() => {
          const element = document.getElementById(item);
          if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
              console.log();
          } else {
              console.error(`Element with id ${item} not found.`);
          }
      }, 100);
  };

  const handleAboutClick = (e) => {
    const handleAboutClick = (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
      navigate('/about');
  };
  };

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="relative" style={{ background: 'none',  backdropFilter: 'none', boxShadow:'none'}}>
        <Toolbar sx={{ justifyContent:'center', justifyContent:'space-evenly', marginTop:'20px'}}>
        <a style={{ color:'white', textDecoration: 'none' }} href="/" onClick={handleHomeClick} title="Home">
          <GiCrossedSwords size="26px" className="hover-effect" />
        </a>

        <div class="dropdown">
          <a style={{ color:'white', textDecoration: 'none' }} href="#music" onClick={(e) => handleSectionClick('music', e)}>
            <Typography className="hover-effect" variant="h6" color="inherit">Music</Typography>
          </a>
            <div class="dropdown-content">
              <a href="#genre1" onClick={(e) => handleDropdownClick('genre1', e)}>
              <Typography variant="h6">Genre 1</Typography>
              </a>
              <a href="#genre2" onClick={(e) => handleDropdownClick('genre2', e)}>
              <Typography variant="h6">Genre 2</Typography>
              </a>
              <a href="#genre3" onClick={(e) => handleDropdownClick('genre3', e)}>
              <Typography variant="h6">Genre 3</Typography>
              </a>
              <a href="#genre4" onClick={(e) => handleDropdownClick('genre4', e)}>
              <Typography variant="h6">Genre 4</Typography>
              </a>
              <a href="#genre5" onClick={(e) => handleDropdownClick('genre5', e)}>
              <Typography variant="h6">Genre 5</Typography>
              </a>
            </div>
        </div>
        <a style={{ color:'white', textDecoration: 'none' }} href="#videos" onClick={(e) => handleSectionClick('videos', e)}>
          <Typography className="hover-effect" variant="h6" color="inherit">Videos</Typography>
        </a>
        <a style={{ color:'white', textDecoration: 'none' }} href="/about" onClick={handleAboutClick}>
          <Typography className="hover-effect" variant="h6" color="inherit">About</Typography>
        </a>
        <a style={{ color:'white', textDecoration: 'none' }} href="#contact" onClick={(e) => handleSectionClick('contact', e)}>
          <Typography className="hover-effect" variant="h6" color="inherit">Contact</Typography>
        </a>
      </Toolbar>
    </AppBar>
    </Box>
  );
};

export default Header;
