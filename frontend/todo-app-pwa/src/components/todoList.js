import React from 'react';
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

const rows = [
    createData(1, 'Assignment', '30/02/2020', 'false'),
    createData(2, 'Email', '15/02/2020', 'false'),
    createData(3, 'Exam', '20/03/2020', 'false'),
  ];

function createData(id, task, targetDate, done) {
return { id, task, targetDate, done };
}

function TodoList(props) {
    const classes = useStyles();
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
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row.id}
                        </TableCell>
                        <TableCell >{row.task}</TableCell>
                        <TableCell>{row.targetDate}</TableCell>
                        <TableCell>{row.done}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
  );
}

export default TodoList;
