import React,{useState, useEffect} from 'react'
import Beer from "./Beer"
import NewBeerForm from "./NewBeerForm"

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
          <h1>Beer List</h1>
        <button onClick={handleClick}>Show/Hide new beer form</button>
        {isClicked ? <NewBeerForm id={id} user={user} addNewBeer={addNewBeer}/> : null}
        {beersToDisplay}
      </div>
    );
  }
  
  export default BeerList;