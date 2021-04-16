import React from "react";
import { Container } from "reactstrap";
import MessageList from "./components/MessageList";
import SearchBar from "./components/SearchBar";
import LeftSideBar from "./components/LeftSidebar";
import RightSideBar from "./components/RightSidebar";

function App() {
  return (
    <div className="App">
      <main className="mb-0">
        {/* <SearchBar /> */}
        <LeftSideBar />
        {/* <RightSideBar /> */}
        <Container>
          <MessageList />
        </Container>
      </main>
    </div>
  );
}

export default App;
