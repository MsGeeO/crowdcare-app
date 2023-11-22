// Notes.js
import React, { useState } from 'react';
import EventNote from '../components/EventTracker/EventNote'; // Updated import path

const Note = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h1>Event Note Page</h1>
      <EventNote /> {/* Render the EventNote component */}
    </div>
  );
};

export default Note;