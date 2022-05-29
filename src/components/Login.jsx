import React, { useState } from 'react';
import '../login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
    let navigate = useNavigate();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const loginUser = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate('/');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    const registerUser = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate('/');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    return (
        <div className='login-page'>
            <Link to="/">
                <img className='login-img' src="https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg" />
            </Link>
            <div className='login-container'>
                <h1>Sign in</h1>
                <form action="">
                    <h5>Email</h5>
                    <input type="text" value={email}
                        onChange={
                            e => setemail(e.target.value)
                        } />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setpassword(e.target.value)} />
                    <button onClick={loginUser} className='login-button'> Sign in</button>
                </form>

                <p>By signing-in you agree to the AMAZON FAKE CLONE condition of the use & the sale.please see our privacy notice,our cookies notice and our interest based ads notice. </p>
                <button onClick={registerUser} className='sign-in-button'> Create your Amazon Account </button>
            </div>

        </div>

    )
}

export default Login