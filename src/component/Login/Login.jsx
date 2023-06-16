import React from 'react';
import logo from "./images/logo1.png";
import { Button } from '@mui/material';
import pic1 from "./images/picture4.jpg";
import "./Login.css";


const Login = () => {
    return (
        <div className='sec-pad1'>
            <div className='container-fluid'>
                <div className="row justify-content-between">
                    <div className="col-md-4">
                        <div className='sec-pad2'>
                            <div className='logo1'>
                                <img src={logo} alt="Logo Image" />
                            </div>
                            <div className='form1'>
                                <h2>Log in to your account</h2>
                                <p>Please enter your email and password</p>
                                <form>
                                    <label htmlFor="username">Username</label>
                                    <br />
                                    <input type="text" name='username' id='username' />
                                    <br />
                                    <br />

                                    <label htmlFor="email">Email address</label>
                                    <br />
                                    <input type="email" name='email' id='email' />
                                    <br />
                                    <br />

                                    <label htmlFor="password">Password</label>
                                    <br />
                                    <input type="password" name='password' id='password' />
                                    <br />
                                    <br />

                                    <div className="row">

                                        <div className="col-md-6">
                                            <input type="checkbox" id="remember" name="remember" value="Bike" />
                                            {/* <label for="remember"> &nbsp; keep me sign in</label> */}
                                            <p>Keep me Sign in</p>
                                        </div>
                                        <div className="col-md-6 text-end">
                                            <a href="#"> Forget Password? </a>
                                        </div>

                                    </div>
                                    <div className='full-button'>
                                    <Button variant="contained">Sign in</Button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className='picture1'>
                            <img src={pic1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login