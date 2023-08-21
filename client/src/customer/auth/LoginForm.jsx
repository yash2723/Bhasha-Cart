import { Grid, TextField } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../state/auth/Action';

const LoginForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const data = new FormData(event.currentTarget);
        const userData = {
            email: data.get("email"),
            password: data.get("password"),
        }
        // console.log(userData);
        dispatch(login(userData));
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField required type='email' id='email' name='email' label='Email Address' fullWidth autoComplete='email' />
                </Grid>
                <Grid item xs={12}>
                    <TextField required type='password' id='password' name='password' label='Password' fullWidth autoComplete='password' />
                </Grid>
                <Grid item xs={12}>
                    <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" type='submit'>
                        Login
                    </button>
                </Grid>
            </Grid>
        </form>
        <div className='flex justify-center items-center flex-col'>
            <div className='py-3 flex items-center'>
                <p>If you don't have Account?</p>
                <button onClick={() => navigate("/register")} className='ml-2 text-base text-indigo-600 font-semibold underline underline-offset-2'>Register</button>
            </div>
        </div>
    </div>
  )
}

export default LoginForm