import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      paddingTop: '25ch',
      textAlign: 'center',
      width: '100%',
      textAlign: 'center'
      
    },
    button: {
        backgroundColor: 'lightblue'
    },
    
    nav: {
        backgroundColor: 'lightblue'
    }
    
  }));

function Login(props) {
    const classes = useStyles();
    
    return (
    <div className={classes.App}>
        {/* <BottomNavigation
        showLabels
        className={classes.nav}
        >
            <BottomNavigationAction label="Todo App" icon={<FormatListBulletedIcon />} />
        </BottomNavigation> */}

        <h4>You have logged out. <Link to="/login">Click here</Link> to login in!</h4>
        
      
    </div>
  );
}

export default Login;
