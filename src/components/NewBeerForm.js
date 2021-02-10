

function NewBeerForm() {

    return (
      <div className="BeerForm">
        <h1>BEER FORM</h1>
        <form>
          <input type='text' placeholder='name'/>
          <input type="text" placeholder="abv"/>
          <input type="text" placeholder="style"/>
          <input type="text" name="image" placeholder="image" src=" "/>
          <button type='submit'>Add New Beer</button>
        </form>
      </div>
    );
  }
  
  export default NewBeerForm