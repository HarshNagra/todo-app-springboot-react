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
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
    tableContainer:{
        padding:'10px'
    }, 
    table: {
      minWidth: 300,
      textAlign: 'center'
    },
    button: {
        backgroundColor: 'lightblue',
    },
    targetDate: {
        fontSize: '12px'
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
                setMessage(`Deleted item`);
            }
        )
    }

    const updateTodoCLicked = (id) => {
        history.push(`/todo/${id}`);
        let username = AuthenticationService.getLoggedInUserName();
    }

    const addTodoCLicked = (id) => {
        history.push(`/todo/-1`);
        let username = AuthenticationService.getLoggedInUserName();
    }

    return (
        <div className="App">
            <TableContainer className={classes.tableContainer} component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        {/* <TableCell>Due Date</TableCell> */}
                        <TableCell></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {todos.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>
                            <Button 
                            className={classes.button} 
                            variant="contained"
                            onClick={() => updateTodoCLicked(row.id)}>
                                <EditIcon/>
                            </Button>
                        </TableCell>
                        <TableCell >{row.task}<br/><div className={classes.targetDate}>{moment(row.targetDate).format('DD/MM/YYYY')}</div></TableCell>
                        {/* <TableCell>{moment(row.targetDate).format('DD/MM/YYYY')}</TableCell> */}
                        <TableCell>
                            <Button 
                                className={classes.button} 
                                variant="contained" 
                                onClick={() => deleteTodoCLicked(row.id)}
                            ><DeleteIcon/></Button>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div style={{padding: '10px'}}>{message}</div>
            <div style = {{padding: '20px'}}>
                <Button 
                    className={classes.button} 
                    variant="contained" 
                    onClick={() => addTodoCLicked(-1)}>
                    <AddIcon/>
                </Button>
            </div>
            
        </div>
  );
}

export default TodoList;
