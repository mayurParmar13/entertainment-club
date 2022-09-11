import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';



export default function Footer() {
  const navigate = useNavigate()
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(newValue)
  };

  return (
    <BottomNavigation  sx={{ width: "100%", position:"fixed", bottom:"0",
    boxShadow: "0px 1px 5px black",color:"black", backgroundColor:"#fff", zIndex:100 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Trading"
        value=""
        icon={<WhatshotIcon sx={{color:"black"}} />}
      />
      <BottomNavigationAction
        label="Movie"
        value="movies"
        icon={<MovieIcon sx={{color:"black"}} />}
      />
      <BottomNavigationAction
        label="TV"
        value="series"
        icon={<TvIcon sx={{color:"black"}} />}
      />
      <BottomNavigationAction label="Search" value="search" icon={<SearchIcon sx={{color:"black"}} />} />
    </BottomNavigation>
  );
}
