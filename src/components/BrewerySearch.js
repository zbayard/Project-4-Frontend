import {Search} from 'semantic-ui-react'

function BrewerySearch({search, setSearch}){


    return(
        <div >
            <input className='SearchBar' value={search} onChange={e=>setSearch(e.target.value)} type="text" placeholder=" enter a city here..."></input>
        </div>
        )
    }
    
    export default BrewerySearch;
    
    
    // <Search value={search} results={null} onSearchChange={e=>setSearch(e.target.value)} type="text" placeholder="enter a city here..."/>