

function BrewerySearch({search, setSearch}){


    return(
        <div className="SearchBar">
            <input value={search} onChange={e=>setSearch(e.target.value)} type="text" placeholder="search by location..."></input>
        </div>
    )
}

export default BrewerySearch;