

function BrewerySearch({search, setSearch}){


    return(
        <div className="SearchBar">
            <h1>sup this is the search</h1>
            <input value={search} onChange={e=>setSearch(e.target.value)} type="text" placeholder="search by location..."></input>
        </div>
    )
}

export default BrewerySearch;