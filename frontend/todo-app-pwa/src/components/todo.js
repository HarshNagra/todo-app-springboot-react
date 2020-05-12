import React, { useState } from 'react';
import moment from 'moment';
import {Formik, Form, Field} from 'formik'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
    form:{
        width: '100%'
    },
    formControl: {
        width: '70%',
        padding: '15px'
    },
    formLabel: {
        color: 'black',
        padding: '5px',
        fontSize: '20px'
    }
    
  }));

function Todo(props) {
    const classes = useStyles();

    const [id, setId] = useState(props.match.params.id);
    const [task, setTask] = useState('Learn Forms Now');
    const [targetDate, setTargetDate] = useState(moment(new Date()).format('YYYY-MM-DD'));

    let taskIV = task;
    let targetDateIV = targetDate;

    const onSubmit = (values) => {
        console.log(values)
    }

    return (
        <div>
            <div className={classes.app}>Task ID: {props.match.params.id}</div>
            <Formik 
                initialValues = {{
                    task: taskIV,
                    targetDate: targetDateIV,
                }}
                onSubmit={() => onSubmit(values)}
            >
                {
                    (props) => (
                        <Form  className={classes.form}>
                            <FormControl className={classes.formControl}>
                                <FormLabel className={classes.formLabel}>
                                    Task
                                </FormLabel>
                                <Field style={{height: '25px', borderRadius: '0.5em'}} className="form-control" type="text" name="task"/>
                            </FormControl> <br/>
                            <FormControl className={classes.formControl}>
                                <FormLabel className={classes.formLabel}>
                                    Target Date
                                </FormLabel>
                                <Field style={{height: '25px', borderRadius: '0.5em'}} className="form-control" type="date" name="targetDate"/>
                            </FormControl> <br/>

                            <Button type="submit" className={classes.button} variant="contained"  >
                                Submit
                            </Button>
                        </Form>
                    )
                }
            </Formik>
        </div>
         

        
        
    );
}

export default Todo;