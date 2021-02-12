import React,{useState} from 'react'
import {Link} from 'react-router-dom'

function Login({setUser}){

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })
   
    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()

        fetch('http://localhost:3000/login', {
            method: 'POST',
        })
        .then(r => r.json())
        .then((user) => {
            setUser(user)
        })
    }

    return(
    <div className='Login'>
        
         <form onSubmit ={handleSubmit} className='Login'>
            <input type='text' placeholder='username' value={formData.username} onChange={handleChange}></input>
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