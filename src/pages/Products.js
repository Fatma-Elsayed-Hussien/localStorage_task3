import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Products() {
    const navigate = useNavigate();
    const navHandler = (page) => {
        navigate(`/products/${page}`, { state: { name: "Fatma" } });
    };
    return (
        <>
            <h5 style = {{margin: "10px"}}> Open Products Details </h5>
            <Button variant='success' onClick={() => navHandler(1)} style = {{margin: "10px"}}> 1 </Button>
            <Button variant='success' onClick={() => navHandler(2)} style = {{margin: "10px"}}> 2 </Button>
            <Button variant='success' onClick={() => navHandler(3)} style = {{margin: "10px"}}> 3 </Button>
        </>
    );
}