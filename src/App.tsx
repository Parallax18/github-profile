import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { auth } from "./firebase";
import {
  onAuthStateChanged
} from "firebase/auth";
import { useDispatch } from 'react-redux';
import { userBuilder } from './utils/helpers';
import { authenticateUser } from './features/api/authSlice';
import Profile from './pages/Profile';
import PrivateRoute  from './hoc/isAuthenticated';

function App() {

  const dispatch = useDispatch()
  useState(() => {
   
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        // console.log({res})
        const userData = userBuilder(res)
        dispatch(authenticateUser(userData))
      } 
    });
    return unsubscribe;
  });
 
  return (
 <div className="App bg-[#0d1117]  font-sans"> 
   
    <BrowserRouter>


    <Routes>
        <Route path="/" element={<Login /> } />
        <Route path="/profile" element={
            <PrivateRoute >
              <Profile /> 
          </PrivateRoute>

        } />

      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
