import React,{useState, useEffect} from 'react'
import Beer from "./Beer"
import NewBeerForm from "./NewBeerForm"
import {Button, Header} from 'semantic-ui-react'

function BeerList({user, id}) {

  const [isClicked, setIsClicked] = useState(false)
  const [beers, setBeers] = useState([])

  useEffect(()=> {

    fetch("http://localhost:3000/beers")
    .then(res => res.json())
    .then(data => setBeers(data))

  }, [])

  

  const filteredBeers = beers.filter(beer => {
    if(beer.brewery_id == id){
      return true
    } else {
      return null
    }
  })


  const beersToDisplay = filteredBeers.map(beer=>{
    return <Beer key={beer.id} beer={beer}/>
  })

  function handleClick(){
    setIsClicked(!isClicked)
  }

  function addNewBeer(newBeer){
    setBeers([...beers, newBeer])

  }

    return (
      <div className="BeerList">
           <Header as='h2' id='featuredbeers' dividing>
            Featured Beers
          </Header>
        {beersToDisplay}
        <Button basic color='black' onClick={handleClick}>Add a Beer!</Button>
        {isClicked ? <NewBeerForm setIsClicked={setIsClicked} id={id} user={user} addNewBeer={addNewBeer}/> : null}
      </div>
    );
  }
  
  export default BeerList;

