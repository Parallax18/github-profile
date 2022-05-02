import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import React, {useEffect} from "react"
import { Navigate, Route} from 'react-router-dom';
import { RouteProps } from 'react-router';


 const PrivateRoute = ({ children }) => {
    //@ts-ignore
    const {isAuthenticated}=  useSelector(state => state.authState)
  return isAuthenticated ? children : <Navigate to="/" />;
}
export default PrivateRoute