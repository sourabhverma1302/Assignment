import React from 'react'
import Navbar from './Navbar/Navbar'
import SearchBar from './Search/Search';
import './App.css'
import Filter from './Filter/Filter';
import Week from './ThisWeek/Week';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
    <div className='container'>
    <Navbar/>
    <SearchBar/>
    <Filter/>
    <Week/>
    </div>
    </Provider>
  )
}

export default App