import React,{useState} from 'react'


function Review({reviewObj, user, onDeleteReview}) {

  const { username, name} = user

  console.log(user)
  const {likes, id, content, user_id } = reviewObj
  const [likeCount, setLikeCount] = useState(likes)

  function handleDeleteClick(){
    fetch(`http://localhost:3000/reviews/${id}`, {
      method: 'DELETE'
    })
    onDeleteReview(id)
  }


  function handleLike(){

    const newLike = {
      likes: likes + 1
    }


    fetch(`http://localhost:3000/reviews/${id}`, {
      method: 'PATCH', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newLike),
    })
    .then(response => response.json())
    .then(data => {
      setLikeCount(data.likes)
    })
  }

    return (
      <div className="Review">
        <p>{content}</p>
        <p> - {username}</p>
        <button onClick={handleLike}>{likeCount} 👍</button>
        <button onClick={handleDeleteClick}> Delete Comment </button>
      </div>
    );
  }
  
  export default Review;


  