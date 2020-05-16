import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import moment from 'moment';
import { useForm } from "react-hook-form";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import TodoDataService from '../api/todo/TodoDataService'
import AuthenticationService from './authenticationService';

const useStyles = makeStyles((theme) => ({
    app: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: '25px',
        padding: '10px'
    },
    button: {
        backgroundColor: 'lightblue'
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
        textAlign: 'center',
        width: '100%',
        
      },
    
  }));

function Todo(props) {
    const classes = useStyles();
    const { register, handleSubmit, setValue, errors } = useForm();
    const history = useHistory();
    const [id, setId] = useState()
    const task = 'Description';
    const targetDate = moment(new Date()).format('YYYY-MM-DD');

    useEffect(() => {
        setId(props.match.params.id);
        if(props.match.params.id==-1){
            return
        }
        
        let username = AuthenticationService.getLoggedInUserName();
        
        TodoDataService.retrieveTodo(username, props.match.params.id)
        .then(response => {
            setValue("task", response.data.task)
            setValue("targetDate", moment(response.data.targetDate).format('YYYY-MM-DD'))
        })
        return function cleanup() {
        }

    }, []);
    
    const onSubmit = data => {
        
        let username = AuthenticationService.getLoggedInUserName();
        let todo = {
                        id: id,
                        task: data.task,
                        targetDate: data.targetDate,
                        username: username
                    }
        if(id==-1){
            TodoDataService.createTodo(username, todo)
            .then (() => {history.push(`/todo`)})
        }
        else{
            TodoDataService.updateTodo(username, id, todo)
            .then (() => {history.push(`/todo`)})
        }
        
    }


    return (
        <div>
            {/* <div className={classes.app}>Task ID: {id}</div> */}
            <form style={{paddingTop: '40px'}} className={classes.root}  onSubmit={handleSubmit(onSubmit)}>
                <TextField 
                    name="task"
                    label="Task" 
                    variant="outlined"
                    type="text"
                    defaultValue={task}
                    inputRef={register({ required: true , minLength: 5})}
                    /> <br/>
                {errors.task && <div style={{display:'inline'}}><p>Task description should have <br/> at least 5 characters</p><br/></div>} 
                <TextField 
                    name="targetDate"
                    label="Due Date" 
                    variant="outlined" 
                    type="date"
                    defaultValue={targetDate}
                    inputRef={register({ required: true })}
                    /> <br/>
                    {errors.targetDate && "Due Date is required."}
                <Button type="submit" className={classes.button} variant="contained"  >
                    Submit
                </Button>
            </form>
            <div style = {{paddingTop: '5px', paddingBottom:'16px'}}>
                <Button onClick={() => history.push('/todo')} className={classes.button} variant="contained"  >
                        Cancel
                </Button>
            </div>
        </div>
         

        
        
    );
}

export default Todo;

