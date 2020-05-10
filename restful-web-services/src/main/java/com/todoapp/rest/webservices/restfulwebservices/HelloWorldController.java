package com.todoapp.rest.webservices.restfulwebservices;

import org.springframework.web.bind.annotation.*;

@RestController()
@CrossOrigin(origins = "http://localhost:4200")
//http"//localhost:4200
public class HelloWorldController {

    //GET
    //URI
    //method
    @GetMapping(path = "/hello-world")
    public String helloWorld(){
        return "Hello World";
    }

    //hello-world-bean
    @GetMapping(path = "hello-world-bean")
    public HelloWorldBean helloWorldBean() {
        return new HelloWorldBean("Hello World");
    }

    //hello-world/path-variable/harsh
    @GetMapping(path = "hello-world/path-variable/{name}")
    public HelloWorldBean helloWorldBean(@PathVariable String name) {
        return new HelloWorldBean(String.format("Hello World %s", name));
    }
}
