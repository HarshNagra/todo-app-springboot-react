import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      paddingTop: '20ch'
      
    },
    button: {
        backgroundColor: 'lightblue'
    }
  }));

function App() {
    const classes = useStyles();
    return (
    <div className={classes.App}>

        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="loginId" label="Login ID" variant="outlined" />
            <TextField id="password" label="Password" variant="outlined" />
            <Button className={classes.button} variant="contained" color="blue" >
                Primary
            </Button>
        </form>
        
      
    </div>
  );
}

export default App;
