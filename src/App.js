// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import LogIn from './pages/login';
import SignUp from './pages/signup';
import ProfilePage from './pages/profile';
import ScheduleAppointment from './pages/scheduleappointment';
import EventTracker from './pages/eventtracker';
import EventNote from './pages/eventnote';
import NoteContext, { NoteProvider } from './context/NoteContext'; // Import NotesProvider

import ProtectedRoute from './components/Entry/ProtectedRoute';
import { UserAuthContextProvider } from './context/userAuthContext';
import './App.css';

function App() {
  return (
    <Router>
      <UserAuthContextProvider>
        <NoteProvider> {/* Wrap the components with NotesProvider */}
          <Routes>
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/scheduleappointment" element={<ScheduleAppointment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />

            {/* Include a route for the EventTracker */}
            <Route path="/eventtracker" element={<EventTracker />} />

            {/* Include a route for the EventNote */}
            <Route path="/eventnote" element={<EventNote />} />
          </Routes>
        </NoteProvider>
      </UserAuthContextProvider>
    </Router>
  );
}

export default App;