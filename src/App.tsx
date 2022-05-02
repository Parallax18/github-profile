import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from 'pages/Login';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { auth } from "./firebase";
import {
  onAuthStateChanged
} from "firebase/auth";
import { useDispatch } from 'react-redux';
import { userBuilder } from './services/utilities/helpers';
import { authenticateUser } from './features/api/authSlice';
import Profile from './pages/Profile';
import PrivateRoute  from './hoc/isAuthenticated';
import Lottie from "lottie-react";
import loadingAnimation from 'assets/lottie/loader.json'

function App() {

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  useState(() => {
   
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        
        // console.log({res})
        const userData = userBuilder(res)
        dispatch(authenticateUser(userData))
      } 

      setLoading(false)
    });
    return unsubscribe;
  });
 
  return (
 <div className="App bg-[#0d1117] font-sans"> 

 {loading ? 
  <Lottie 
    animationData={loadingAnimation}
    height={400}
    width={400}
    autoplay
    loop
    />
 
 : 
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
}
   
   
    </div>
  );
}

export default App;
