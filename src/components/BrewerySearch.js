

function BrewerySearch({search, setSearch}){


    return(
        <div className="SearchBar">
            <input value={search} onChange={e=>setSearch(e.target.value)} type="text" placeholder="enter a city here..."></input>
        </div>
    )
}

export default BrewerySearch;