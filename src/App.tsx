import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <h1>React TypeScript</h1>
      <User name = "MD. Mominur Rhaman" department='Jr. Software Engineer' age =  {28} isregistered={true}/>
      <User name = "MD. Shawon" department='Jr. Software Engineer' age =  {29} isregistered={false}/>
    </div>
  );
}

export default App;
