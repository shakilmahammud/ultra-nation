import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Home from './Component/Home/Home';
function App() {
  return (
    <Router>
      <Home/>
    </Router>
  );
}

export default App;
