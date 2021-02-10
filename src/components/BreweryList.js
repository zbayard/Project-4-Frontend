import Brewery from './Brewery.js'

function BreweryList({breweries}){


    const breweriesToDisplay = breweries.map(brewery => {
        return <Brewery key={brewery.id} brewery={brewery}/>
    })

    return(
        <div className='BreweryList'>
            <h1> Brewery List</h1>
            {breweriesToDisplay}
        </div>
        
    )
}

export default BreweryList;