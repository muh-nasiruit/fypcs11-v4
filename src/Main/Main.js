import MainCss from '../Main/Main.module.css';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Main = () => {
    const [show, setShow] = useState(false);
    let navigate = useNavigate();
    const signUpBtn = () => {
        let signUpPath = `signUp`
        navigate(signUpPath)
    }

    const signInBtn = () => {
        let signInPath = `login`
        navigate(signInPath)
    }
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <div className={MainCss["banner"]}>
            <div className={MainCss["navbar"]}>
                <span>DRAW STACK</span>
                <ul>
                    <li>
                        <a href="#">Details</a>
                    </li>
                    <li>
                        <a href="#">Faq</a>
                    </li>
                </ul>
            </div>
            <div className={MainCss["content"]}>
                <h1>Log Analysis using ELK Stack Implementation</h1>
                <div className={MainCss["our-card-container"]}>
                    <div className={MainCss["our-card"]}>
                        <h2>Sign In</h2>
                        <p>Do Sign in First , Login to access the dashboard.</p>
                        <button id="signin-btn" type="button" className="btn btn-outline-primary" onClick={handleShow}
                        >Sign In</button>
                    </div>
                    {/* sigin modal */}
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>SIGN IN</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="name"
                                        placeholder="Enter username"
                                        autoFocus
                                    />
                                    <br/>
                                    <Form.Label>Password</Form.Label>
                                     <Form.Control
                                        type="password"
                                        placeholder="Enter password"
                                        autoFocus
                                    />
                                    <div className={MainCss["login-btn"]}>
                                    <input type="button" name="" value="Login"/>
                                    </div>
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                    </Modal>
                    <div className={MainCss["our-card"]}>
                        <h2>Sign Up</h2>
                        <p>Don't have an account ? Sign up to view the project.</p>
                        <button id="signup-btn" type="button" className="btn btn-outline-secondary" onClick={signUpBtn}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main