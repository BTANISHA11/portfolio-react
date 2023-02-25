import React from "react";
import './App.css';
import ReactDOM  from "react-dom";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return(
    <Router>
  <Routes>
    <Route path = '/' element={<App/>}/>
  </Routes>
  
<Header/>

    
</Router>
  );
}
export default App;