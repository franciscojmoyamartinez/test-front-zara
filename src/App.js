import React from 'react';
import './App.css';
import List from './components/listPodcasts/List';
import Router from './route/Router';
function App() {
  
  return (
    <div className="div-index">
      <Router>
        <List />
      </Router>
    </div>
  );
}

export default App;
