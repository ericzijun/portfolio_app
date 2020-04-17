import React from 'react';

import './App.css';
import
{
BrowserRouter as Router,
Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';

function App() {
  return (
  <Router>
  <div className="App">
  <Navbar />

<Route exact path="/">
<Home/>

</Route>
{/* Route for About.js contents */}
<Route path="/about">
<About />
</Route>

  </div>
  </Router>
  )
  }
  export default App;