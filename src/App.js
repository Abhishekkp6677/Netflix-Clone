import React from "react";
import './App.css'
import Banner from "./components/banner/Banner";
import NavBar from "./components/navbar/Navbar";
import RowPost from "./components/rowpost/RowPost";
import { action,originals,Trending,comedy,horror,romance,documentaries } from "./url"; 

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={originals} title='Netflix Originals' class="posters__poster"/>
        <RowPost url={Trending} title='Trending' class="posters__smallPoster"/>
        <RowPost url={action} title='Action' class="posters__smallPoster"/>
        <RowPost url={comedy} title='Comedy' class="posters__smallPoster"/>
        <RowPost url={romance} title='Romance' class="posters__smallPoster"/>
        <RowPost url={horror} title='Horror' class="posters__smallPoster"/>
        <RowPost url={documentaries} title='Documentaries' class="posters__smallPoster"/>
        
    </div>
  );
}

export default App;