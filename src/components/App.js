import React,{useEffect, useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import logo from '../logo.svg';
import '../App.css';
import Header from './Header.js'

import Profile from './Profile.js'
import BreweryList from './BreweryList.js'


function App() {
  
  const [breweries, setBreweries] = useState([])
  const [search, setSearch] = useState('')

  const filteredBreweries = breweries.filter(brewery=> brewery.city.toLowerCase().includes(search.toLowerCase()))

  useEffect(()=>{
    fetch('https://api.openbrewerydb.org/breweries?page=#%7Bi%7D&per_page=50')
    .then(res=>res.json())
    .then(data=>setBreweries(data))
  },[])

  console.log(breweries)

  return (
    <>
      <div className="App">
        <Header search={search} setSearch={setSearch}/>
        
      
        <Switch>
          <Route exact path="/profile">
            <Profile/>
          </Route>
          <Route exact path="/breweries">
            <BreweryList breweries={filteredBreweries} />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;