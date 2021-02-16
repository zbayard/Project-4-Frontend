import React,{useState} from 'react'
import { Button, Comment } from 'semantic-ui-react'

function Review({reviewObj, user, onDeleteReview}) {

  const { name, image} = user

  console.log(user)
  const {likes, id, content } = reviewObj
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

      
       
        <Comment>
          <Comment.Avatar src={image} />
          <Comment.Content>
            <Comment.Author as='a'>{name}</Comment.Author>
            {/* <Comment.Metadata>
              <div>Today at 5:42PM</div>
            </Comment.Metadata> */}
            <Comment.Text>{content}</Comment.Text>
            <Comment.Actions>
              <Button basic color='black' onClick={handleLike}>{likeCount} 👍</Button>
              <Button basic color='black' onClick={handleDeleteClick}> Delete Comment </Button>
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