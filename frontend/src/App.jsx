import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Doctor from './pages/Doctor';
import Login from './pages/Login';
import Content from './pages/Content';
import Myprofile from './pages/Myprofile';
import Myappointments from './pages/Myappointments';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/doctor/:speciality" element={<Doctor />} />
  

        <Route path="/login" element={<Login />} />
        <Route path="/content" element={<Content />} />
        <Route path="/myprofile" element={<Myprofile />} />
        <Route path="/myappointments" element={<Myappointments />} />
        <Route path="/appointment/:docId" element={<Appointment />} />


        
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
