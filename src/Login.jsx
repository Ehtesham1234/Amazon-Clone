import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { auth } from './firebase';
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate("/", { replace: true })
            })
            .catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth)
                if (auth) {
                    navigate("/", { replace: true })
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <Link to='/' style={{ textDecoration: "none" }}>
                <img className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />

                    <button className='login__signInButton' onClick={signIn}>
                        Sign In
                    </button>
                </form>
                <p>
                    By signing-in you agree to AMAZON FAKE CLONE condition of use & sale. Please see out Privacy Notice, our Cookies Notice
                    and our Interest-Based Ads Notice.
                </p>
                <button
                    className='login__registerButton'
                    onClick={register}
                >
                    Create your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login