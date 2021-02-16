import Brewery from './Brewery.js'
import { Card } from  'semantic-ui-react'

function BreweryList({breweries}){


    const breweriesToDisplay = breweries.map(brewery => {
        return <Brewery key={brewery.id} brewery={brewery}/>
    })

    return(
        <div className='BreweryList'>
            <Card.Group itemsPerRow={3}> {breweriesToDisplay} </Card.Group>
        </div>
        
    )
}

export default BreweryList;