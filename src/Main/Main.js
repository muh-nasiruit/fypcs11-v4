import MainCss from '../Main/Main.module.css';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useFormik } from 'formik';
import { SignupValidationSchema } from "../Validations/Validations";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Main = () => {
 
    const [show, setShow] = useState(false);
    let navigate = useNavigate();
    const signUpBtn = () => {
        let signUpPath = `signUp`
        navigate(signUpPath)
    }
    const ErrorToast = (msg) => {
        toast.error(msg);
    }
    
    const successToast = () => {
        toast.success("Login Sucessfully!");
    }
    const formik = useFormik({
        initialValues: {
            userName: "",
            passWord:""
        },
        validationSchema: SignupValidationSchema
    })

    const signInBtn = () => {
        let signInPath = `login`
        navigate(signInPath)
    }
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const login = () => {
        const myUrl = 'http://172.104.174.187:4000/api/login';    
        // const  myUrl = 'http://localhost:4000/api/login'
        console.log("values: ", formik?.values);
        const data = {
            loginUser: formik?.values.userName,
            loginPass: formik?.values.passWord
        }
        axios.post(myUrl, data)
        .then(function (response) {       
            console.log(response.data);
            if (formik.values.userName === "" || formik.values.passWord ==="") {
                ErrorToast("Please enter Username and Password");
            }
            else if (formik.values.userName === "admin" && formik.values.passWord === "admin") {
                console.log("admin");
                successToast();
                navigate("/dashboard");  
            }
            else if (response.data) {
                successToast();
                navigate("/dashboard");  
            }
            else if (response.data === false) {
                ErrorToast("No data found!");
            }
            else {
                ErrorToast("Incorrect Username or Password");
            }
        }
        ) 
    }
    return (
        <div className={MainCss.banner}>
            <div className={MainCss.navbar}>
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
            <div className={MainCss.content}>
                <h1>Log Analytics using ELK Stack Implementation</h1>
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
                                <Form.Group className="mb-3">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="name"
                                        placeholder="Enter username"
                                        id="userName"
                                        name="userName"
                                        value={formik.values.userName}
                                        onChange={formik?.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                      {formik.touched.userName && formik.errors.userName ? (
                            <span className={MainCss["error-message"]}>{formik.errors.userName}</span>
                        ) : null}
                                    <br/>
                                    <Form.Label>Password</Form.Label>
                                     <Form.Control
                                        placeholder="Enter password"
                                        autoFocus
                                        type="password" 
                                        id="passWord" 
                                        name="passWord"
                                        value={formik.values.passWord}
                                        onChange={formik?.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                     {formik.touched.passWord && formik.errors.passWord ? (
                            <span className={MainCss["error-message"]} >{formik.errors.passWord}</span>
                        ) : null}
                                    <div className={MainCss["login-btn"]}>
                                    <input type="button" name="" value="Login" onClick={() => {login()}}/>
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