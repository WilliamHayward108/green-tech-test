import React, {useState} from 'react';
import logo from './logo.svg';

const LoginForm = () => {
    const [credential, setCredential] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
    };


    return (
        <div className="login">
            <img alt="logo" src={logo} className="login-logo" />
            <div>
                <h1 className="login-h1">Example login screen</h1>
                <h2 className="login-h2 light">Getting started with Green.</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit} className="login-form-input-group">
                    <label className="login-email-label light">Email Address</label>
                    <input className="login-input" id="loginInput"  value={credential} type="text"  required onChange={(e) => setCredential(e.target.value)}/>
                    <div className="login-checkbox">
                        <input type="checkbox" id="rememberMe"  checked={rememberMe} onChange={(e) =>setRememberMe(!rememberMe)} />
                        <label htmlFor='rememberMe'>Remember this device</label>
                    </div>
                    <button className="btn">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;