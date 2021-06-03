import React  from 'react'
import { Card, Image } from 'semantic-ui-react'

function Profile({user, /*setUser*/}) {

  const { username, name, bio, image} = user

  // const [formData, setFormData] = useState({
  //   username, 
  //   name, 
  //   bio, 
  //   image
  // })

  // function handleChange(e) {
  //   setFormData({
  //     ...FormData, 
  //     [e.target.name]: e.target.value
  //   })
  // }

  // function handleSubmit(e) {
  //   e.preventDefault()
  //   fetch('http://localhost:3000/profile', {
  //     method: 'PATCH', 
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(formData)
  //   })
  //   .then((r) => r.json())
  //   .then(data => setUser(user))
  // }

    return (

    <Card centered>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className='username'>Username: {username}</span>
        </Card.Meta>
        <Card.Description>
          {bio}
        </Card.Description>
      </Card.Content>
  </Card>

 
    );
  }
  
  export default Profile;

