import logo from './logo.svg';
import './App.css';

import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Result from './pages/Result';
import Buycredit from './pages/Buycredit';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { ToastContainer, toast } from 'react-toastify';






function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <ToastContainer position='bottom-right'/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/result' element={<Result/>}/>
        <Route path='/buy' element={<Buycredit/>}/>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
