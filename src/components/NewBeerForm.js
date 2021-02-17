import React, {useState} from 'react'

function NewBeerForm({addNewBeer, user, id}) {

  const [name, setName] = useState('')
  const [abv, setAbv] = useState('')
  const [style, setStyle] = useState('')
  const [image, setImage] = useState('')
  const [comment, setComment] = useState('')

  function handleSubmit(e){
    e.preventDefault()

    const newBeer = {
      // ADD USER ID & BREWERY ID DEFAULT
      name,
      brewery_id: id,
      user_id: user.id,
      abv: parseInt(abv),
      style,
      image,
      comment
    }


    fetch('http://localhost:3000/beers', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBeer),
    })
    .then(response => response.json())
    .then(data => {
      addNewBeer(data)
    })

  }

    return (
      <div className="BeerForm">
        <form onSubmit={handleSubmit}>
          <input value={name} onChange={e=> setName(e.target.value)} type='text' placeholder='name'/>
          <input value={abv} onChange={e=> setAbv(e.target.value)} type="text" placeholder="abv"/>
          <input value={style} onChange={e=> setStyle(e.target.value)} type="text" placeholder="style"/>
          <input value={image} onChange={e=> setImage(e.target.value)} type="text" name="image" placeholder="image" src=" "/>
          <input value={comment} onChange={e=> setComment(e.target.value)} type="text" name="comment" placeholder="comment"/>
          <button type='submit'>Add New Beer</button>
        </form>
      </div>
    );
  }
  
  export default NewBeerForm