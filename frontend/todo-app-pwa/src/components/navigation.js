import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'lightblue'
    },
});

function Navigation() {
    const history = useHistory();
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    return (
    <div className="App">
        <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
        showLabels
        className={classes.root}
        >
            <BottomNavigationAction onClick={e =>history.push("/welcome")} label="" icon={<HomeIcon/>} />
            <BottomNavigationAction onClick={e =>history.push("/todo")} label="" icon={<FormatListBulletedIcon />} />
        </BottomNavigation>
        
            

    </div>
  );
}

export default Navigation;
