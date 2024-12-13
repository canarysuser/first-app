import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router';

function Login(props) {
    const [model, setModel] = useState({ username: '', password: '' });
    const navigate  = useNavigate(); 
    const [canNavigate, setCanNavigate] = useState(false);
    const onHandleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setModel({ ...model, [name]: value });
    }
    const onSubmit = (e) => {
        e.preventDefault();
        //props.onSubmit(model);
        //Call a service which will hit an JWT authentication API and retreives a token
        //The local service can return the token to the Component
        let token="ABBeeek2i8j2777dk"; 
        window.sessionStorage.setItem("token", token);
        navigate({pathname:'/'});
        //setCanNavigate(true);
    }

    if(canNavigate) {
        return <Navigate to={'/'}></Navigate>
    }

    return (
        <div className='card shadow w-25 m-auto'>
            <div className='card-header bg-primary h3 text-white'>Log In</div>
            <div className='card-body'>
                <form id="form1" onSubmit={onSubmit}>
                    <div className='input-group mb-3'>
                        <span className='input-group-text'>@</span>
                        <input type="text" className='form-control'
                            placeholder='Username'
                            name="username" id="username"
                            value={model.username}
                            onChange={(e) => onHandleChange(e)} />
                    </div>
                    <div className='input-group mb-3'>
                        <span className='input-group-text'>#</span>
                        <input type="password" className='form-control'
                            placeholder='Password'
                            name="password" id="password"
                            value={model.password}
                            onChange={onHandleChange} />
                    </div>
                    <div className='text-end'>
                        <button type="submit" className='btn btn-lg btn-success'
                        >Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login