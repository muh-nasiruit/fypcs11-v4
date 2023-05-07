import React from 'react';
import './Signup.css';
import axios from 'axios';
import { useFormik } from 'formik';
import graphImg from '../assets/graph-bg.png'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { SignupValidationSchema } from "../Validations/Validations";
// import { useEffect } from "react";
import Button from 'react-bootstrap/Button';

const ErrorToast = (msg) => {
    toast.error(msg);
}

const successToast = (msg) => {
    toast.success(msg);
}
const SignUp = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            userName: "",
            email: "",
            passWord: "",
            confirmPassword: ""
        },
        validationSchema: SignupValidationSchema
    })

    const signUp = () => {
        const myUrl = 'http://172.104.174.187:4000/api/signup';
        // const myUrl = 'http://localhost:4000/api/signup';
        axios.post(myUrl, formik?.values)
            .then((response) => {
                successToast("Registered Successfully");
                // navigate("/login"); 
            })
            .catch((error) => {
                console.log(error);
                ErrorToast("Unexpected Error!");
            })
    };
    return (
      <section>
            <div class="imgBx">
                <img src={graphImg} alt=""/>
            </div>
            <div className="contentBx">
            <div class="formBx">
                <h2>Sign up</h2>
            </div>
            <form action="">
                <div class="inputBx">
                    <span>Username</span>
                    <input type="text"
                    />
                </div>
                <div class="inputBx">
                    <span>Email</span>
                    <input type="email"
                     id="email"
                     name="email"
                     value={formik.values.email}
                     onChange={formik?.handleChange}
                     onBlur={formik.handleBlur}
                    />
                     {formik.touched.email && formik.errors.email ? (
                            <span className="error-message">{formik.errors.email}</span>
                        ) : null}
                </div>
                <div class="inputBx">
                    <span>Password</span>
                    <input type="password"/>
                </div>
                <div class="inputBx">
                    <span>Confirm Password</span>
                    <input type="password"/>
                </div>
                <div class="inputBx">
                    <input type="button" value="Sign up"
                    onClick={() => signUp()}
                    />
                </div>  
                <div className="back-to-main">
                    <Button variant="link" onClick={()=>navigate("/")}>Back to Main</Button> 
                    </div>
            </form>
            </div>
            <ToastContainer />
      </section>
    )
}
export default SignUp