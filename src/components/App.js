import React,{useEffect, useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import logo from '../logo.svg';
import '../App.css';
import Header from './Header.js'
import Login from './Login.js'
import SignUp from './SignUp.js'
import Profile from './Profile.js'
import BreweryList from './BreweryList.js'
import BreweryPage from './BreweryPage.js'


function App() {
  
  const [breweries, setBreweries] = useState([])
  const [search, setSearch] = useState('')

  const filteredBreweries = breweries.filter(brewery=> brewery.city.toLowerCase().includes(search.toLowerCase()))

  useEffect(()=>{
    fetch("http://localhost:3000/breweries")
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
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/signup">
            <SignUp/>
          </Route>
          <Route exact path="/breweries">
            <BreweryList breweries={filteredBreweries} />
          </Route>
          <Route path="/breweries/:id">
            <BreweryPage />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;