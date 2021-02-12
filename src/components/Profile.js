function Profile({user, setUser}) {

  const { username, name, bio, image} = user

  const [formData, setFormData] = useState({
    username, 
    name, 
    bio, 
    image
  })

  function handleChange(e) {
    setFormData({
      ...FormData, 
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:3000/profile', {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((r) => r.json())
    .then(data => setUser(user))
  }
    return (
      <div className="Profile">
        <h1>PROFILE </h1>
        <p>{username}</p>
        <img src={image} alt="image here"></img>
        <p>{name}</p>
        <p>{bio}</p>
        <p>favorite breweries</p>
        <p>uploaded beers?</p>
        
      </div>
    );
  }
  
  export default Profile;