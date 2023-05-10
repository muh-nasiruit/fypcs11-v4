import React from 'react';
import SignupCSS from './Signup.module.css';
import axios from 'axios';
import { useFormik } from 'formik';
import graphImg from '../assets/graph-bg.png'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { SignupValidationSchema } from "../Validations/Validations";
import Loader from '../Loader/Loader';
import { useState } from "react";
import Button from 'react-bootstrap/Button';

const ErrorToast = (msg) => {
    toast.error(msg);
}

const successToast = (msg) => {
    toast.success(msg);
}
const SignUp = () => {
    const [isLoading, setLoading] = useState(false);
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
        setLoading(true);
        const myUrl = 'http://172.104.174.187:4000/api/signup';
        // const myUrl = 'http://localhost:4000/api/signup';
        axios.post(myUrl, formik?.values)
            .then((response) => {
                setLoading(false);
                successToast("Registered Successfully");
                localStorage.setItem('SignupStatus',true)
                setTimeout(() => {
                    navigate("/");
                }, 2000);
                // navigate("/login"); 
            })
            .catch((error) => {
                console.log(error);
                ErrorToast("Unexpected Error!");
            })
    };
    return (
      <section>
            <div className={SignupCSS.imgBx}>
                <img src={graphImg} alt=""/>
            </div>
            <div className={SignupCSS.contentBx}>
            <div className={SignupCSS.formBx}>
                <h2>Sign up</h2>
            </div>
            <form action="">
            <div className={SignupCSS["signup-form"]}>
                <div className={SignupCSS.inputBx}>
                    <span>Username</span>
                    <input type="text"
                    id="userName"
                    name="userName"
                    value={formik.values.userName}
                    onChange={formik?.handleChange}
                    onBlur={formik.handleBlur}
                    />
                     {formik.touched.userName && formik.errors.userName ? (
                            <span className={SignupCSS["error-message"]} >{formik.errors.userName}</span>
                        ) : null}
                </div>
                <div className={SignupCSS.inputBx}>
                    <span>Email</span>
                    <input type="email"
                     id="email"
                     name="email"
                     value={formik.values.email}
                     onChange={formik?.handleChange}
                     onBlur={formik.handleBlur}
                    />
                     {formik.touched.email && formik.errors.email ? (
                            <span className={SignupCSS["error-message"]}>{formik.errors.email}</span>
                        ) : null}
                </div>
                <div className={SignupCSS.inputBx}>
                    <span>Password</span>
                    <input type="password"
                     id="passWord"
                     name="passWord"
                     value={formik.values.passWord}
                     onChange={formik?.handleChange}
                     onBlur={formik.handleBlur}
                     />
                        {formik.touched.passWord && formik.errors.passWord ? (
                              <span className={SignupCSS["error-message"]} >{formik.errors.passWord}</span>
                          ) : null}
                </div>
                <div className={SignupCSS.inputBx}>
                    <span>Confirm Password</span>
                    <input type="password"
                     id="confirmPassword"
                     name="confirmPassword"
                     value={formik.values.confirmPassword}
                     onChange={formik?.handleChange}
                     onBlur={formik.handleBlur}
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <span className={SignupCSS["error-message"]} >{formik.errors.confirmPassword}</span>
                    ) : null}
                </div>
                <div className={SignupCSS.inputBx}>
                    <input type="button" value="Sign up"
                    onClick={() => signUp()}
                    />
                </div>  
                <div className={SignupCSS["back-to-main"]}>
                    <Button variant="link" onClick={()=>navigate("/")}>Back to Main</Button> 
                    </div>
                    </div>
            </form>
            </div>
            <ToastContainer />
            {isLoading && <Loader/>}
      </section>
    )
}
export default SignUp