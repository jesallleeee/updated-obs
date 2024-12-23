import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Facilities from './components/facilities';
import Room from './components/room';
import Contact from './components/contact';
import SelectRoom from './components/selectRoom';
import BookingForm from './components/bookingForm';
import './App.css';

function App() {
  return (
    <Router>

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar/>
              <Home />
            </>
          }
        />

        {/* Facilities Page */}
        <Route
          path="/facilities"
          element={
            <>
              <Navbar />
              <Facilities />
            </>
          }
        />

        {/* Room Page */}
        <Route
          path="/room"
          element={
            <>
              <Navbar />
              <Room />
            </>
          }
        />

        {/* Contact Page */}
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
            </>
          }
        />
        <Route path="/selectRoom" element={<SelectRoom />} />
        <Route path="/bookingForm" element={<BookingForm />} />
      </Routes>
    </Router>
  );
}

export default App;