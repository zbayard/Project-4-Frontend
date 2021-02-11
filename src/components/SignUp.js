import React from 'react'
import {Link} from 'react-router-dom'

function SignUp(){

   

    return(
    <div className='SignUp'>
        
         <form className='SignUp'>
         <input type='text' placeholder='Name'></input>
            <input type='text' placeholder='Password'></input>
            <input type='text' placeholder='Username'></input>
            <input type='text' placeholder='Image'></input>
            <input type='textarea' placeholder='Bio'></input>
            <Link to='/breweries'> Register </Link>
        </form>

       
       
    </div>
    );
};

export default SignUp;