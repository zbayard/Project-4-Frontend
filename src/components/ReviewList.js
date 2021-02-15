import Review from './Review'
import NewReviewForm from './NewReviewForm'

function ReviewList({id, user, reviews, onAddReview, onDeleteReview}){

    const reviewsToDisplay = reviews.map(review =>{
        return <Review key={review.id} reviewObj={review} user={user} onDeleteReview={onDeleteReview}/>
    })

    return (
        <div className='ReviewList'>
            <h1>Review List</h1>
            {reviewsToDisplay}
            <NewReviewForm user={user} breweryID={id} onAddReview={onAddReview}/>
        </div>
    )
};

export default ReviewList;