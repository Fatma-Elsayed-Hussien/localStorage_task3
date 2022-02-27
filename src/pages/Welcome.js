import React from 'react';
import { Button } from 'react-bootstrap';

export default function Welcome() {
    const logoutHandler = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };
    return (
        <div>
            <Button onClick = {()=> logoutHandler()}> Logout </Button>
        </div>
    );
}