import React from 'react';
import {  Link } from 'react-router-dom';
import AuthenticationService from './authenticationService';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';



const useStyles = makeStyles({
    root: {
        backgroundColor: 'lightblue'
    },
});

function Navigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('Home');
    const isUserLoggedIn = AuthenticationService.isUserLogedIn();
    const username = AuthenticationService.getLoggedInUserName();

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return (
    <div className="App">
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            {!isUserLoggedIn && <BottomNavigationAction label="Todo App" icon={<FormatListBulletedIcon />} />}
            {isUserLoggedIn && <BottomNavigationAction component={Link} to={`/welcome/${username}`} label="Home" value="welcome" icon={<HomeIcon/>} />}
            {isUserLoggedIn && <BottomNavigationAction component={Link} to="/todo" label="Todo" value="todo" icon={<FormatListBulletedIcon />} />}
            {isUserLoggedIn && <BottomNavigationAction onClick={AuthenticationService.logout} component={Link} to="/logout" label="Logout" value="logout" icon={<ExitToAppIcon />} />}
        </BottomNavigation>
        
            

    </div>
  );
}

export default Navigation;
