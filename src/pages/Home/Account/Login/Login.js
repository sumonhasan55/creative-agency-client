import React, { useContext } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';

const Login = () => {

    const { signinUser, googleSignin } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = event => {

        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signinUser(email, password)
            .then((result) => {
                const user = result.user
                console.log(user)
                navigate("/")
            })
            .catch((error) => {
                console.log('Error', error)
            })


    }

    const handleGoogleSignin = () => {
        googleSignin()
            .then((result) => {
                const user = result.user;
                console.log(user)
                navigate("/")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-3xl my-5 text-green-400 font-bold text-center">Login now!</h1>
                        <div className="card-body">
                            <Form onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>

                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn bg-amber-400">Login</button>
                                </div>
                            </Form>

                            <div className="form-control mt-6">
                                <button onClick={handleGoogleSignin} className="btn btn-xs bg-green-500">Signin with Google</button>
                            </div>
                            <label className="label">
                                <Link to="/register">
                                    <a href="#" className="label-text-alt link link-hover">Create a new account!</a>
                                </Link>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;