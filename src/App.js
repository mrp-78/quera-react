import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./component/NavBar";
import FirstPage from "./component/FirstPage";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <FirstPage />
    </React.Fragment>
  );
}

export default App;
