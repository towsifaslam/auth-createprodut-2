 import { useEffect } from 'react';
import './App.css';
import {ToastContainer}from'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {BrowserRouter,Routes,Route} from'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Headers from './component/Headers';
import {useDispatch} from'react-redux'
import { setUser } from './redux/features/authSlice';
import AddEditTour from './pages/Add|EditTour';
import SingleTour from './pages/SingleTour';
import Dashbord from './pages/Dashbord';
function App() {
   const dispatch = useDispatch()
   const user = JSON.parse(localStorage.getItem('profile'))
    useEffect(()=>{
      dispatch(setUser(user))
    },[])
   return (
    <BrowserRouter>
    <div className="App">
      <Headers />
      <ToastContainer />
       
        <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/login' element={<Login />} />
         <Route path='/register' element={<Register />} />
         <Route path='/addTour' element={<AddEditTour />} />
         <Route path='/editTour/:id' element={<AddEditTour />} />
        <Route path='/tour/:id' element={<SingleTour />} />
        <Route path='/dashbord' element={<Dashbord />} />
        </Routes>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
