import React,{useState, useEffect} from 'react'
import Beer from "./Beer"
import NewBeerForm from "./NewBeerForm"

function BeerList() {

  const [isClicked, setIsClicked] = useState(false)
  const [beers, setBeers] = useState([])

  useEffect(()=> {

    fetch("http://localhost:3000/beers")
    .then(res => res.json())
    .then(data => setBeers(data))

  }, [])

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
        <Beer beers={beers}/>
        {isClicked ? <NewBeerForm addNewBeer={addNewBeer}/> : null}
      </div>
    );
  }
  
  export default BeerList;