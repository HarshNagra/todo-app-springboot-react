import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'lightblue'
    },
});

function Navigation() {
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
            <BottomNavigationAction label="Todo App" icon={<FormatListBulletedIcon />} />
        </BottomNavigation>
    </div>
  );
}

export default Navigation;
