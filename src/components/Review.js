import React,{useState} from 'react'
import { Button, Comment, Rating} from 'semantic-ui-react'


function Review({reviewObj, user, onDeleteReview}) {

  const { name, image} = user

  console.log(user)
  const {likes, id, content, rating } = reviewObj
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

      
       
        <Comment text align='left'>
          <Comment.Avatar src={image} />
          <Comment.Content>
            <Comment.Author as='a'>{name}</Comment.Author>
            <Comment.Text>{content}</Comment.Text>
            <p>
              <Rating defaultRating={rating} maxRating={5} disabled />
            </p>
            <Comment.Actions>
              <Button size='mini' basic color='black' onClick={handleLike}>{likeCount} ♥️ </Button>
              <Button size='mini' basic color='black' onClick={handleDeleteClick}> ✖︎ </Button>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
  
    );
  }
  
  export default Review;


  
      // <div className="Review">
      //   <p>{content}</p>
      //   <p> - {username}</p>
      //   <button onClick={handleLike}>{likeCount} 👍</button>
      //   <button onClick={handleDeleteClick}> Delete Comment </button>
      // </div>