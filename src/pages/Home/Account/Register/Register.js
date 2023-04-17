import React, { useContext } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';




const Register = () => {

    const navigate = useNavigate()
    const { registerUser } = useContext(AuthContext)


    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        registerUser(email, password)
            .then((result) => {
                const user = result.user
                console.log(user)
                navigate("/")

            })
            .catch((error) => {
                console.log(error)
            })


    }

    return (
        <Form onSubmit={handleSubmit}>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-3xl my-5 text-green-400 font-bold text-center">Signup now!</h1>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-xs bg-green-500">Signin with Google</button>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-amber-400">Signup</button>
                            </div>
                            <label className="label">
                                <Link to="/login">
                                    <a href="#" className="label-text-alt link link-hover">Have an account! <button className='btn btn-xs bg-green-400'>login</button></a>
                                </Link>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </Form>
    );
};

export default Register;