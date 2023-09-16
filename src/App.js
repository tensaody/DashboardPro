import logo from './logo.svg';
import './App.css';
import Sidbar from './pages/Sidbar';
import Navbar from './components/Navbar';
import About from './pages/About';
import { Outlet, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Insert from './pages/Insert';
import InformationsData, { Cardss } from './pages/InformationsData';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <>
      
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route path='/' element= {<Dashboard/>}/>
            <Route path='insert' element= {<Insert/>}/>
            <Route path='datatable' element= {<InformationsData/>}/>
          </Route> 
            <Route path='login' element={<Login/>}/>    
            {/* <Route path='sigup' element={<Signup/>}/> */}
        </Routes>
    </>
    
  );
}

export default App;

function MainLayout () {
  return(
    <>
      <Sidbar/>
      <Outlet/>      
      </>
  )
}
