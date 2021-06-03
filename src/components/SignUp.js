import React from 'react'
import { Form, Grid, Segment, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function SignUp(){

    function handleSubmit(e){
        e.preventDefault()
        console.log('hello')
    }

    return(
        <Segment placeholder>
            <Grid columns={1} relaxed='very' stackable>
            <Grid.Column>
            <Form onSubmit ={handleSubmit}>
                <Form.Input
                icon='user'
                iconPosition='left'
                label='Name'
                />
                <Form.Input
                icon='user'
                iconPosition='left'
                label='Username'
                />
                <Form.Input
                icon='lock'
                iconPosition='left'
                label='Password'
                type='password'
                />
                <Form.Input
                icon='images'
                iconPosition='left'
                label='Image'
                />
                <Form.Input
                icon='vcard'
                iconPosition='left'
                label='Bio'
                />

                {/* <Button basic color='yellow' content='Login'  /> */}
                <Link basic color='yellow' type='submit' to='/breweries'>Check Out Breweries!</Link>
            </Form>
            </Grid.Column>

            <Divider horizontal></Divider>
        
          <Grid.Column verticalAlign='middle'>
            {/* <Button basic color='olive' content='Sign up' icon='signup' size='medium' /> */}
            Already have an account? <Link to='/login'>Sign In</Link>
          </Grid.Column>
            </Grid>
        </Segment>
    );
};

export default SignUp;







/* <div className='SignUp'>
        
         <form className='SignUp'>
         <input type='text' placeholder='Name'></input>
            <input type='text' placeholder='Password'></input>
            <input type='text' placeholder='Username'></input>
            <input type='text' placeholder='Image'></input>
            <input type='textarea' placeholder='Bio'></input>
            <Link to='/breweries'> Register </Link>
        </form>

       
       
    </div> */