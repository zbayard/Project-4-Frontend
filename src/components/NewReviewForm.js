import React, {useState} from 'react'

function NewReviewForm({user, breweryID, onAddReview}) {

    
    const [content, setContent] = useState('')
    
    function handleSubmitReview(e){
        e.preventDefault()

        const newReview = {
            user_id: user.id,
            brewery_id: breweryID,
            rating: 0,
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
    }

    return (
        <div className="ReviewForm">
          <h5>Leave a Review:</h5>
          <form onSubmit={handleSubmitReview}>
            
            <input value={content} onChange={e=> setContent(e.target.value)} type='textarea' placeholder='leave a comment about this brewery'/>
            <button type='submit'>Submit</button>
          </form>
        </div>
      );
}
  
  export default NewReviewForm;


  