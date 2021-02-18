import {Input} from 'semantic-ui-react'

function BrewerySearch({search, setSearch}){


    return(
        <div >
             <Input icon='search' value={search} onChange={e=>setSearch(e.target.value)} type="text" placeholder="enter a city here..."/>
        </div>
        )
    }
    
    export default BrewerySearch;
    
    
    // <input className='SearchBar' value={search} onChange={e=>setSearch(e.target.value)} type="text" placeholder=" enter a city here..."></input>