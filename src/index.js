import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import { useState } from "react";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DataLayer } from './DataLayer';
import reducer, { initialState } from './reducer';
import UserList from "./users/list";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataLayer initialState={initialState} reducer={reducer}>
        <App />
      </ DataLayer>
      <Routes>
        <Route path="/users" element={<UserList />} />

      </Routes></BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();