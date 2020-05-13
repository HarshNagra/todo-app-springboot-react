import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import moment from 'moment';
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
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    button: {
        backgroundColor: 'lightblue',
    }
});


function TodoList(props) {
    const classes = useStyles();
    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState(null);
    const history = useHistory();
    useEffect(() => {
        refreshTodos();
        return function cleanup() {
        }

    }, []);

    const refreshTodos = () => {
        let username = AuthenticationService.getLoggedInUserName();
        TodoDataService.retrieveAllTodos(username)
        .then( 
            response => {
                setTodos(response.data)
                }
            )
    }

    const deleteTodoCLicked = (id) => {
        let username = AuthenticationService.getLoggedInUserName();
        TodoDataService.deleteTodo(username, id)
        .then (
            response => {
                refreshTodos();
                setMessage(`Deleted item ${id}`);
            }
        )
    }

    const updateTodoCLicked = (id) => {
        history.push(`/todo/${id}`);
        let username = AuthenticationService.getLoggedInUserName();
        console.log()
    }

    const addTodoCLicked = (id) => {
        history.push(`/todo/-1`);
        let username = AuthenticationService.getLoggedInUserName();
        console.log("Add")
    }

    return (
        <div className="App">
            {/* <Navigation/> */}
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        {/* <TableCell>ID</TableCell> */}
                        <TableCell>Task</TableCell>
                        <TableCell>Due Date</TableCell>
                        <TableCell>Done</TableCell>
                        <TableCell>Update</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {todos.map((row) => (
                        <TableRow key={row.id}>
                        {/* <TableCell component="th" scope="row">
                            {row.id}
                        </TableCell> */}
                        <TableCell >{row.task}</TableCell>
                        <TableCell>{moment(row.targetDate).format('YYYY-MM-DD')}</TableCell>
                        <TableCell>{''+row.done}</TableCell>
                        <TableCell>
                            <Button 
                            className={classes.button} 
                            variant="contained"
                            onClick={() => updateTodoCLicked(row.id)}>
                                Update
                            </Button>
                        </TableCell>
                        <TableCell>
                            <Button 
                                className={classes.button} 
                                variant="contained" 
                                onClick={() => deleteTodoCLicked(row.id)}>
                                Delete
                            </Button>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div>{message}</div>
            <div style = {{padding: '20px'}}>
                <Button 
                    className={classes.button} 
                    variant="contained" 
                    onClick={() => addTodoCLicked(-1)}>
                    Add
                </Button>
            </div>
            
        </div>
  );
}

export default TodoList;
