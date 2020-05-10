package com.todoapp.rest.webservices.restfulwebservices.todo;

import java.util.Date;

public class Todo {

    private long id;
    private String username;
    private String task;
    private Date targetDate;
    private boolean done;

    public Todo(long id, String username, String task, Date targetDate, boolean done) {
        this.id = id;
        this.username = username;
        this.task = task;
        this.targetDate = targetDate;
        this.done = done;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public void setTargetDate(Date targetDate) {
        this.targetDate = targetDate;
    }

    public void setDone(boolean done) {
        this.done = done;
    }

    public long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getTask() {
        return task;
    }

    public Date getTargetDate() {
        return targetDate;
    }

    public boolean isDone() {
        return done;
    }



}
