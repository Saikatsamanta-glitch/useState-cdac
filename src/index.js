import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './Counter';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <h1 className="heading">Welcome to React js <span> Function Component 👋</span></h1>
  <hr />


  <Counter/>


  </React.StrictMode>
);

