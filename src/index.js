import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import BemVindo from './BemVindo';
import Texto from './Texto'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BemVindo/>
  <Texto/>
  </>
);
