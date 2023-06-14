import React from 'react';
import { Button } from '@mui/material';


const Login = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-md-4">
                        <img src="./images/logo1.png" alt="" />
                        <h2>Log in to your account</h2>
                        <p>Please enter your email and password</p>
                        <form>
                            <label htmlFor="username"></label>
                            <input type="text" name='username' id='username' />

                            <label htmlFor="email"></label>
                            <input type="email" name='email' id='email' />

                            <label htmlFor="password"></label>
                            <input type="password" name='password' id='password' />

                            <div className="row">

                                <div className="col-md-6">
                                    <input type="checkbox" id="remember" name="remember" value="Bike" />
                                    <label for="remember"> keep me sign in</label>
                                </div>
                                <div className="col-md-6">
                                    <a href="#"> forget password? </a>
                                </div>

                            </div>
                            <Button> Sign In </Button>

                        </form>
                    </div>
                    <div className="col-md-8">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login