import React, { useEffect, useState } from "react";
import { Icon } from 'semantic-ui-react'
import { useParams } from "react-router-dom";
import ReviewList from './ReviewList.js'
import BeerList from './BeerList.js'
import { Grid } from 'semantic-ui-react'

function BreweryPage({user}){

    const [brewery, setBrewery] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [reviews, setReviews] = useState([])

    const { id } = useParams();


  useEffect(() => {
    fetch(`http://localhost:3000/breweries/${id}`)
      .then((r) => r.json())
      .then((brewery) => {
        setBrewery(brewery);
        setIsLoaded(true);
      });
    }, [id]);


  useEffect (() => {
    fetch(`http://localhost:3000/reviews`)
    .then(r=>r.json())
    .then(reviewsArr => setReviews(reviewsArr))
  }, [])

  const filteredReviews = reviews.filter(review=> {
    if(review.brewery_id == id){
      return true
    } else {
      return null
    }
  })

  function onAddReview(newReview){
    setReviews([...reviews, newReview])
  }

  function handleDeleteReview(id){
    const updatedReviews = reviews.filter((review) => review.id !== id)
    setReviews(updatedReviews)
  }

  if (!isLoaded) return <h2>Loading...</h2>;

  const { name, brewery_type, street, city, state, postal_code, phone, website_url } = brewery;



    return(

      <Grid >
        <Grid.Column width={4} className='beerlist' style={{overflow: 'auto', maxHeight: 700 }}>
          <BeerList id={id} user={user}/>
        </Grid.Column>
        <Grid.Column width={8} className='brewerypage' border>
          <h1>{name}</h1>
          <h3><Icon name='beer' />{brewery_type}</h3>
          <h3><Icon name='map marker alternate'/> {street} - {city}, {state} {postal_code}</h3>
          <h3><Icon name='phone'/> {phone} </h3>
          <h3><Icon name='address card outline'/><a href={website_url} target='_blank'>Visit Website</a></h3> 
        </Grid.Column>
        <Grid.Column width={4} className='reviewlist'>
          <ReviewList id={id} user={user} reviews={filteredReviews} onAddReview={onAddReview} onDeleteReview={handleDeleteReview}/>
        </Grid.Column>
      </Grid>

     
    )
}

export default BreweryPage;






{/* <div className='BreweryPage'>
          
<h1>{name}</h1>
<h3><Icon name='beer' />{brewery_type}</p>
<p><Icon name='map marker alternate'/> {street} - {city}, {state} {postal_code}</p>
<p><Icon name='phone'/> {phone} </p>
<p><Icon name='address card outline'/><a href={website_url} target='_blank'>Visit Website</a></p>
  <ReviewList id={id} user={user} reviews={filteredReviews} onAddReview={onAddReview} onDeleteReview={handleDeleteReview}/>
  <BeerList id={id} user={user}/>

</div>  */}