package com.todoapp.rest.webservices.restfulwebservices.todo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoJpaRepository extends JpaRepository<Todo,Long>{
    List<Todo> findByUsername(String username);
}
