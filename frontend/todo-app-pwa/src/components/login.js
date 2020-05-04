import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    loginFail: {
        width:'100%', 
        textAlign: 'center'
    }
    
  }));

function App() {
    const classes = useStyles();

    const [loginId, setLoginId] = useState("");
    const [password, setPassword] = useState("");
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [loginFail, setLoginFail] = useState(false);
  
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (loginId === 'login' && password==='password'){
            setLoginFail(false);
        }
        else{
            setLoginFail(true);
        }
    }
    return (
    <div className={classes.App}>
        
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>

            {loginFail && <div className={classes.loginFail}>Invalid Credentials</div>}
            <TextField 
                id="loginId" 
                label="Login ID" 
                variant="outlined"
                value={loginId}
                onChange={e => setLoginId(e.target.value)}
                /> <br/>
            <TextField 
                
                id="password" 
                label="Password" 
                variant="outlined" 
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                /> <br/>
            <Button type="submit" className={classes.button} variant="contained"  >
                Submit
            </Button>
        </form>
        
      
    </div>
  );
}

export default App;

