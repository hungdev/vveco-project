import React, { useState } from 'react'
import './input.scss'
import { useDispatch, useSelector } from "react-redux";
import { login } from '../reducers/authReducer'
import { Redirect } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const token = useSelector((store) => store.authReducer.token);
  const user = localStorage.getItem('user');

  const [fieldState, setFieldState] = useState({ username: 'admin', password: 'vipage123' })


  const onChangeInput = (ev) => {
    setFieldState(prev => ({ ...prev, [ev.target.name]: ev.target.value }))
  }

  const onSubmit = () => {
    dispatch(login({ username: fieldState.username, password: fieldState.password }))
  }
  return token ? <Redirect to={'/shop'} /> :
    (
      <div>
        Login
        <div>
          <input className='input-class' name='username' value={fieldState?.username} onChange={onChangeInput} />
        </div>
        <div>
          <input className='input-class' value={fieldState?.password} onChange={onChangeInput} />
        </div>
        <div onClick={onSubmit}>Login</div>
      </div>
    )
}

export default Login
