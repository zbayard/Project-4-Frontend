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
  const [user, setUser] = useState(null)

  const filteredBreweries = breweries.filter(brewery=> brewery.city.toLowerCase().includes(search.toLowerCase()))

  //fake auto login auth
  useEffect(() => {
    fetch("http://localhost:3000/profile")
    .then(r => r.json())
    .then(user => setUser(user))
  }, [])


// fetch all breweries 
  useEffect(()=>{
    fetch("http://localhost:3000/breweries")
    .then(res=>res.json())
    .then(data=>setBreweries(data))
  },[])

  return (
    <>
      <div className="App">
        <Header search={search} setSearch={setSearch} user={user} setUser={setUser}/>
       
  
        <Switch>
          <Route exact path="/profile">
            { user ? (
              <Profile user={user} setUser={setUser}/>
            ) : ( <h2> Please login to see this page </h2>)}
          </Route>
          <Route exact path="/login">
            <Login setUser={setUser}/>
          </Route>
          <Route exact path="/signup">
            <SignUp/>
          </Route>
          <Route exact path="/breweries">
            <BreweryList breweries={filteredBreweries} />
          </Route>
          <Route path="/breweries/:id">
            <BreweryPage user={user} />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;