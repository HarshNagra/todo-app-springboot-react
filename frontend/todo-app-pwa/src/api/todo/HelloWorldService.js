import axios from 'axios';

class HelloWorldService {
    executeHelloWorldService(){
        return axios.get('http://localhost:8080/hello-world')
        
    }

    executeHelloWorldBeanService(){
        return axios.get('http://localhost:8080/hello-world-bean') 
    }

    executeHelloWorldPathService(name){
        // let username = 'harsh'
        // let password = 'password'

        // let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
        // , 
        //     {
        //         headers:{
        //             authorization: basicAuthHeader
        //         }
        //     }
        ) 
    }
}

export default new HelloWorldService;