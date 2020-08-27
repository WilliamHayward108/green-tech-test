import React from 'react';
import Chat from './Chat';
import LoginForm from "./LoginForm";

const LoginPage = () => {
    return (
        <div className="login-container login-background">
            <div>
                <LoginForm />
                <>
                    <Chat />
                </>
            </div>
        </div>
    );
};

export default LoginPage;