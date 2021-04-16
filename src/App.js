import React from "react";
import { Container } from "reactstrap";
import MessageList from "./components/MessageList";
import Message from "./components/Message";
import SearchBar from "./components/SearchBar";
import LeftSideBar from "./components/LeftSidebar";
import RightSideBar from "./components/RightSidebar";
import SingleMessage from './components/SingleMessage';
import { Link, Route, Switch } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
          <div className="App">
            <div className="mb-0">
              {/*<div><SearchBar /> */}
              <div>
                <LeftSideBar />
              </div>
              <div>
                {/* <Container /> */}
              </div>
              <Link to="/">Home</Link>{" "}
              <Link to="/Message/:id">Message</Link>{" "}
              <Switch>
                <div>
                <Route exact path="/message/:id">               
                    <SingleMessage />
                  </Route>
                  <Route exact path="/">
                    <MessageList />
                  </Route>                
                </div>
              </Switch>
              <div>
                <RightSideBar />
              </div>
              <div>
                <Container />
              </div>
            </div>
          </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export default App;

