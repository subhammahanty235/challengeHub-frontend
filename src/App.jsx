
import './App.css'
import Login from './pages/login/Login'
import CreateProfile from './pages/createProfile/CreateProfile'
import { Routes, Route } from "react-router-dom";
import CreateOrJoinPage from './pages/createorjoinPage/CreateorJoinPage';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import { fetchUser } from './redux/actions/userActions'
import ProfilePage from './pages/profilePage/ProfilePage';

function App() {
  const navigate = useNavigate();
  const { authenticated } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    if (authenticated === true || localStorage.getItem('token')) {
      dispatch(fetchUser())
    } else {
      navigate('/login')

    }
  }, [authenticated])

  useEffect(() => {
    if (user) {
      if (user.profileCreated !== true) {
        navigate("/createprofile")
      }
    }
  }, [user])





  return (
    <>
      
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path='/createprofile' element={<CreateProfile />} />
          <Route exact path='/join' element={<CreateOrJoinPage />} />
          <Route exact path='/profile' element={<ProfilePage/>} />
          <Route path='/' element={<Dashboard />} />
        </Routes>
        <SpeedInsights />
     
    </>
  )
}

export default App
