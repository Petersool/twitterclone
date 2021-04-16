import React from "react";
import { Container } from "reactstrap";
import MessageList from "./components/MessageList";
import Message from "./components/Message";
import SearchBar from "./components/SearchBar";
import LeftSideBar from "./components/LeftSidebar";
import RightSideBar from "./components/RightSidebar";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <Router>
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
              <Link to={{ pathname: "/about" }}>About</Link>{" "}
              <Switch>
                <div>
                  <Route path="/Message">
                    <Message />
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
    </Router>
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
