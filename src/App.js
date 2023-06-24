import React from 'react'
import Navbar from './Navbar/Navbar'
import SearchBar from './Search/Search';
import './App.css'
import Filter from './Filter/Filter';
import Week from './ThisWeek/Week';

const App = () => {
  return (
    <div className='container'>
    <Navbar/>
    <SearchBar/>
    <Filter/>
    <Week/>
    </div>
  )
}

export default App