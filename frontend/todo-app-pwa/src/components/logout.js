import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      paddingTop: '25ch',
      textAlign: 'center',
      width: '100%',
      
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
        <h4>You have logged out. <Link to="/login">Click here</Link> to login in!</h4>
        
      
    </div>
  );
}

export default Login;
