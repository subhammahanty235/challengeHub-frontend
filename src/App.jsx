
import './App.css'
import Login from './pages/login/Login'
import CreateProfile from './pages/createProfile/CreateProfile'
import { Routes, Route } from "react-router-dom";
import CreateOrJoinPage from './pages/createorjoinPage/CreateorJoinPage';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
function App() {
  const navigate = useNavigate();
  const { authenticated } = useSelector((state) => state.auth)

  useEffect(() => {
    if (authenticated === true || localStorage.getItem('token')) {
      console.log("authenticated"  )
    }else{
      navigate('/login')
      
    }
  }, [authenticated])



  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path='/createprofile' element={<CreateProfile />} />
        <Route exact path='/join' element={<CreateOrJoinPage />} />
        <Route path='/' element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App
