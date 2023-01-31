import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Login } from './features/login/Login';
import { Task } from './features/task/Task';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Login></Login>
          <Task></Task>
      </header>
    </div>
  );
}

export default App;
