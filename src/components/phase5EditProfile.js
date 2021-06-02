import {Segment, Header, Form, Button, Divider} from 'semantic-ui-react';
import {useState} from 'react';
import{useHistory} from 'react-router-dom';

function ProfileEdit({ user, setCurrentUser, setOpen}) {

    console.log(user)

    const [name, setName] = useState(user.name)
    const [image, setImage] = useState(user.image_url)
    const [errors, setErrors] = useState([])
    const history = useHistory();

    function handleEditProfile(e){
        e.preventDefault()

        const formData = new FormData()
        formData.append('name', name)
        formData.append('user_image', image)

        const token = localStorage.getItem('token')
        if (token) { 
            fetch(`http://localhost:3000/users/${user.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`, 
                }, 
                method: 'PATCH', 
                body: formData, 
                })
            .then((r) => r.json())
            .then((data) => {
                if (data.errors) {
                    setErrors(data.errors)
                }else{
                    setCurrentUser(data)
                    setOpen(false)
                }
            })
        }
    }

    return (

        <div className="edit-profile">
        
        <Segment>
          <Header as='h2' color='black' textAlign='center'>
          </Header>
          <Form onSubmit={handleEditProfile} >
              <Divider horizontal>Update your info</Divider>
              <input type='text' 
                    name='name'
                    value={name}
                    placeholder={user.name}
                    onChange={(e)=>setName(e.target.value)}
                />
              <input type='file'
                    name='image'
                    accept='image/png, image/jpeg, image/jpg'
                    multiple={false} 
                    onChange={(e) => setImage(e.target.files[0])}
                />
           
              <Button type='submit'>Update!</Button>
            
          </Form>
        </Segment>
      </div>

    )
}

export default ProfileEdit;




IN PROFILE.JS 

<p>
                            <Modal basic 
                            onClose={() => setOpen(false)}
                            onOpen={() => setOpen(true)}
                            open={open}
                            size='small'
                            trigger={<Button basic color='teal'>Edit Profile</Button>}>
                            <ProfileEdit user={user} setCurrentUser={setCurrentUser} setOpen={setOpen}/>
                    </Modal>
                        </p>



REGISTER JS 


import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom'

function Register({setCurrentUser}) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    function handleSubmit(e){
        e.preventDefault();

        // const registerObj = {
        //     username, 
        //     password, 
        //     name, 
        //     image
        // }

        const formData = new FormData();
        formData.append('username', username)
        formData.append('password', password)
        formData.append('name', name)
        formData.append('user_image', image)
        
        console.log(image)
        console.log(formData)
        
        fetch('http://localhost:3000/signup', {
            method: 'POST', 
            body: formData,
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            // body: JSON.stringify(registerObj)
        })
        .then((r)=>r.json())
        .then((data) => {
            if (data.errors) {
                setErrors(data.errors)
            }else {
                const {user, token} = data;
                localStorage.setItem('token', token)
                setCurrentUser(user);
                history.push('/restaurants');
            }
        })
    }    
    
    return (
        <div className='ui raised segment centered' style={{borderColor: '#71ACB2'}} >
            <div className='ui four column centered grid'>
                <div className='column'>   
                    <h2 className='login-title'>Welcome to al 'freskō!</h2>
                    <div className='ui form'>
                        <form className="login-form" onSubmit={handleSubmit}>
                            <div className='field'>
                                <input
                                    type="text"
                                    placeholder="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className='field'>
                                <input
                                    type="text"
                                    placeholder="username"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className='field'>
                                <input
                                    type="password"
                                    placeholder="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className='field'>
                                <input
                                    type="file"
                                    name='user_image'
                                    placeholder='image'
                                    accept='image/png, image/jpeg, image/jpg'
                                    multiple={false}
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </div>
                            {errors.map(error => {
                                return <p key={error}>{errors}</p>
                            })}
                            <input className="ui basic button" type="submit" value="Register" />
                        </form>
                        <br></br>
                        <p>
                            Already have an account? <Link to='/login'>Login</Link>
                        </p>
                        <br></br>
                    </div>
                </div>
            </div>
        </div>
        );
    }
    
    export default Register;