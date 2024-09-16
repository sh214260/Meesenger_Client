import React, { useState } from 'react';
import { signUpUser } from '../api/userApi';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [contacts, setContacts]=useState([])

    const handleSignUp = async (event) => {
        event.preventDefault(); 
        try {
            const result = await signUpUser(email, password, name, );
            if (result.success) {
                setMessage('Sign up successful!');
            } else {
                setMessage(result.message || 'Sign up failed');
            }
        } catch (error) {
            console.error('Sign up failed:', error);
            setMessage('Sign up failed');
        }
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <br />
                <button type="submit">Sign Up</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default SignUp;
