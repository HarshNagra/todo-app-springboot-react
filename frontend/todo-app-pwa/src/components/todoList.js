import React, { useEffect, useState } from 'react';
import TodoDataService from '../api/todo/TodoDataService';
import AuthenticationService from './authenticationService';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});


function TodoList(props) {
    const classes = useStyles();
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        let username = AuthenticationService.getLoggedInUserName();
        console.log("mount")
        TodoDataService.retrieveAllTodos(username)
        .then( 
            response => {
                setTodos(response.data)
            }
            )
        
        return function cleanup() {
            console.log("unmount")
        }

    }, []);
    return (
        <div className="App">
            {/* <Navigation/> */}
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Task</TableCell>
                        <TableCell>Target Date</TableCell>
                        <TableCell>Done</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {todos.map((row) => (
                        <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                            {row.id}
                        </TableCell>
                        <TableCell >{row.task}</TableCell>
                        <TableCell>{row.targetDate}</TableCell>
                        <TableCell>{''+row.done}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
  );
}

export default TodoList;
