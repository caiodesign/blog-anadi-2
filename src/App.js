import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './container/Home'
import Blog from './container/Blog'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exatc path="/blog" component={Blog} />
    </Router>
  );
}



export default App;
