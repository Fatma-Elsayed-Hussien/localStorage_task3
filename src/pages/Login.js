import React from 'react';
import {Button} from 'react-bootstrap';
export default function Login(){
    const loginHandler = () =>{
        localStorage.setItem(
            "token",
            "fatmaelsayed"
        );
        window.location.href = "/login";
    };
    return(
        <Button onClick={() => loginHandler()}>Login</Button>
    )
}