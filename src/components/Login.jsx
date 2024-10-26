import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from './config';
import "./Login.css"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post(`${config.apiUrl}/login`, {email, password})
        .then(result => {
            console.log(result.data); 
            if (result.data.token) { 
                console.log("Login Success");
                alert('Login successful!');
                localStorage.setItem('token', result.data.token); 
                navigate('/home');
            } else {
                alert('Login failed! Incorrect credentials.');
            }
        })
        .catch(err => {
            console.error("Login error:", err);
            alert('An error occurred. Please try again.');
        });
    }

    return (
        <div>
            <div id='loginPage' className="d-flex justify-content-center align-items-center vh-100" >
                <div className="bg-white p-3 rounded shadow-lg" style={{ width: '100%', maxWidth: '500px' }}>
                    <h2 className="mb-3 text-primary text-center">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong>Email Id</strong>
                            </label>
                            <input 
                                type="email" 
                                placeholder="Enter Email"
                                className="form-control" 
                                id="exampleInputEmail1" 
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                <strong>Password</strong>
                            </label>
                            <input 
                                type="password" 
                                placeholder="Enter Password"
                                className="form-control" 
                                id="exampleInputPassword1" 
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                    <p className="mt-3 text-center">Don&apos;t have an account?</p>
                    <Link to='/register' className="btn btn-secondary w-100">Register</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
