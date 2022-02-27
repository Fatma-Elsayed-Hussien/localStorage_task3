import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import style from '../styles.module.css';

export default function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    {localStorage.getItem("token") ? (
                        <Nav className="me-auto">
                            <Nav.Link>
                                <NavLink
                                    to={"/"}
                                    className={(nav) => nav.isActive ? style.active : style.normal}
                                >
                                    Welcome
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink
                                    to={"/products"}
                                    className={(nav) => nav.isActive ? style.active : style.normal}
                                >
                                    Products
                                </NavLink> {" "}
                            </Nav.Link>
                        </Nav>
                    ): (
                        <Nav className="me-auto">
                            <Nav.Link>
                                <NavLink
                                    to={"/login"}
                                    className={(nav) => nav.isActive ? style.active : style.normal}
                                >
                                    Login
                                </NavLink>
                            </Nav.Link>
                        </Nav>
                    )}
                </Container>
            </Navbar>
        </>
    )
}