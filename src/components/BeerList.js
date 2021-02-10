import Beer from "./Beer"
import NewBeerForm from "./NewBeerForm"

function BeerList() {

    return (
      <div className="BeerList">
          <h1>Beer List</h1>
        <button>Show/Hide new beer form</button>
        <Beer/>
        <NewBeerForm/>
      </div>
    );
  }
  
  export default BeerList;