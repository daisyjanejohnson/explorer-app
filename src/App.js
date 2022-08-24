import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import LocationData from "./Data.json";

function App() {
  return (
    <div className="App">

      <SearchBar placeholder="Search Here" data={LocationData}/>
    
    </div>
  );
}

export default App;


