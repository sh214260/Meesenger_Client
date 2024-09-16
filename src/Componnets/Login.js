import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/userSlice';
import { loginUser } from '../api/userApi';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userSlice.user)
    const handleLogin = async () => {
        const data = await loginUser(email, password)
        if (data.token) {
            dispatch(login({ user: data.user, token: data.token }));
            console.log(data);
        }
    };

    return (
        <div>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
            <h3>{user?user.name:"hi"}</h3>
        </div>
    );
};

export default Login;
