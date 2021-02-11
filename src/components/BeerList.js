import React,{useState} from 'react'
import Beer from "./Beer"
import NewBeerForm from "./NewBeerForm"

function BeerList() {

  const [isClicked, setIsClicked] = useState(false)

  function handleClick(){
    setIsClicked(!isClicked)
  }

    return (
      <div className="BeerList">
          <h1>Beer List</h1>
        <button onClick={handleClick}>Show/Hide new beer form</button>
        <Beer/>
        {isClicked ? <NewBeerForm/> : null}
      </div>
    );
  }
  
  export default BeerList;