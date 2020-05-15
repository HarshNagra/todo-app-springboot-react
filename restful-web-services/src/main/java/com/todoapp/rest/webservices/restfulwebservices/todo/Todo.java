package com.todoapp.rest.webservices.restfulwebservices.todo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;
import java.util.Objects;

@Entity
public class Todo {

    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private String task;
    private Date targetDate;
    private boolean done;

    protected Todo() {

    }
    public Todo(long id, String username, String task, Date targetDate, boolean done) {
        this.id = id;
        this.username = username;
        this.task = task;
        this.targetDate = targetDate;
        this.done = done;
    }

    public void setId(Long id) {
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

    public Long getId() {
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Todo todo = (Todo) o;
        return id == todo.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
