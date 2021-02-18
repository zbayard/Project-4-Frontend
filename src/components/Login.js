import React,{useState} from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

function Login({setUser}){

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
   
    // function handleChange(e) {
    //     setFormData({...formData, [e.target.name]: e.target.value})
    // }

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

       <Segment placeholder>
        <Grid columns={1} relaxed='very' stackable>
          <Grid.Column>
            <Form onSubmit ={handleSubmit}>
              <Form.Input
                icon='user'
                iconPosition='left'
                label='Username'
                placeholder='Username'
                value={userName} 
                onChange={e=> setUserName(e.target.value)}
              />
              <Form.Input
                icon='lock'
                iconPosition='left'
                label='Password'
                type='password'
                placeholder='Password'
                value={password} 
                onChange={e=> setPassword(e.target.value)}
              />
              {/* <Button type='submit' basic color='yellow' as="Link" to="/breweries">Login</Button> */}
              {/* <Button basic color='yellow' content='Login'  /> */}
              <Button basic color='yellow' type='submit' as={Link} to='/breweries'>Login</Button>
            </Form>
          </Grid.Column>
        
        <Divider horizontal></Divider>
        
          <Grid.Column verticalAlign='middle'>
            {/* <Button basic color='olive' content='Sign up' icon='signup' size='medium' /> */}
            Don't have an account? <Link to='/signup'>Sign Up</Link>
          </Grid.Column>
        </Grid>
      
      </Segment> 
    
    );
};

export default Login;



