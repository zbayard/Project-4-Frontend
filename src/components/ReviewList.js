import Review from './Review'

function ReviewList({}){

    


    return (
        <div className='ReviewList'>
            <h1>Review List</h1>
            <Review />
            <NewReviewForm onAddReview={onAddReview}/>
        </div>
    )
};

export default ReviewList;