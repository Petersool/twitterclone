import React from "react";
import { Container } from "reactstrap";
import MessageList from "./components/MessageList";
import SearchBar from "./components/SearchBar";
import LeftSideBar from "./components/LeftSidebar";
import RightSideBar from "./components/RightSidebar";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="mb-0">        
        {/*<div><SearchBar /> */}
        <div><LeftSideBar /></div>        
        <div><Container /></div>
        <div><MessageList /></div>
        <div><RightSideBar /></div>
        <div><Container /></div>
      </div>
    </div>
  );
}

export default App;
