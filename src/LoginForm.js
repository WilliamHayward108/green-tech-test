import React, {useState} from 'react';
import logo from './logo.svg';

const LoginForm = () => {
    const [credential, setCredential] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const showCheckbox = () => {
        if(credential){
            return (
                <div className="login-checkbox">
                    <input type="checkbox" id="rememberMe"  checked={rememberMe} onChange={(e) =>setRememberMe(!rememberMe)} />
                    <label htmlFor="rememberMe">{rememberMe ? 'This device will be saved' : 'Remember this device?'}</label>
                </div>
            )
        }
    };

    return (
        <div className="login">
            <img alt="logo" src={logo} className="login-logo" />
            <div>
                <h1 className="login-h1">Hello and welcome to Green.</h1>
                <h2 className="login-h2">Enter your email/mobile number below</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit} className="login-form-input-group">
                    <input className="login-input" autoFocus value={credential} type="text" placeholder="Account email/mobile number" required onChange={(e) => setCredential(e.target.value)}/>
                    {showCheckbox()}
                    <button className="btn btn-login">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;