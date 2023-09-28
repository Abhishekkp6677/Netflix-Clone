import React from "react";
import './App.css'
import Banner from "./components/banner/Banner";
import NavBar from "./components/navbar/Navbar";
import RowPost from "./components/rowpost/RowPost";
import { action,originals } from "./url"; 

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={originals} title='Netflix Originals'/>
        <RowPost url={action} title='Action'/>
        
    </div>
  );
}

export default App;