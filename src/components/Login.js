import React,{useState} from 'react'
import {Link} from 'react-router-dom'

function Login(){

   

    return(
    <div className='Login'>
        
         <form className='Login'>
            <input type='text' placeholder='username'></input>
            <input type='text' placeholder='password'></input>
            <Link to='/breweries'>Login</Link>
        </form>

        <div>
            Don't have an account? <Link to='/signup'>Sign Up</Link>
        </div> 
       
    </div>
    );
};

export default Login;