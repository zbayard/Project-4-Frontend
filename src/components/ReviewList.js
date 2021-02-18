import React,{useState} from 'react'
import Review from './Review'
import NewReviewForm from './NewReviewForm'
import {Header, Divider, Comment, Button} from 'semantic-ui-react'

function ReviewList({id, user, reviews, onAddReview, onDeleteReview}){

    const [reviewClick, setReviewClick] = useState(false)

    const reviewsToDisplay = reviews.map(review =>{
        return <Review key={review.id} reviewObj={review} user={user} onDeleteReview={onDeleteReview}/>
    })

    function handleReviewClick(){
        setReviewClick(!reviewClick)
    }

    return (
       
        <Comment.Group>
            <Header as='h2' id='reviewslist' dividing>
                Reviews 
            </Header>
            {reviewsToDisplay}

            <Divider horizontal />

            <Button basic color='black' onClick={handleReviewClick}>Review This Brewery</Button>
            {reviewClick ? <NewReviewForm user={user} breweryID={id} onAddReview={onAddReview} setReviewClick={setReviewClick}/>: null}
        </Comment.Group>
    )
};

export default ReviewList;




/* <div className='ReviewList'>
<h1>Review List</h1>

<button onClick={handleReviewClick}>Review This Brewery</button>
{reviewClick ? <NewReviewForm user={user} breweryID={id} onAddReview={onAddReview}/>: null}
</div> */