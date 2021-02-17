import React, {useState} from 'react'
import {Button, Form, Rating} from 'semantic-ui-react'

function NewReviewForm({user, breweryID, onAddReview, setReviewClick}) {

    
    const [content, setContent] = useState('')
    const [rating, setRating] = useState(0)
    
    function handleSubmitReview(e){
        e.preventDefault()

        const newReview = {
            user_id: user.id,
            brewery_id: breweryID,
            rating: parseInt(rating),
            likes: 0,
            content 
        }

        fetch('http://localhost:3000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
        .then(r=>r.json())
        .then(data => {
            onAddReview(data)
        })

        setReviewClick(false)
    }

    function handleRateChange(e, { rating }) {
        e.preventDefault();
        setRating(rating);
      }

    return (
        
        <Form reply onSubmit={handleSubmitReview}>
            <h4> Rate this brewery: 
                
                <Rating size='huge' maxRating={5} clearable value={rating} onRate={handleRateChange}/>
            </h4>
          <Form.TextArea value={content} onChange={e=> setContent(e.target.value)}  />
          <Button basic color='black' type='submit' content='Add Review' labelPosition='left' icon='edit' primary />
        </Form>
  
      );
}
  
  export default NewReviewForm;



  // <div className="ReviewForm">
  //         <h5>Leave a Review:</h5>
  //         <form onSubmit={handleSubmitReview}>
            
  //           <input value={content} onChange={e=> setContent(e.target.value)} type='textarea' placeholder='leave a comment about this brewery'/>
  //           <button type='submit'>Submit</button>
  //         </form>
  // </div>