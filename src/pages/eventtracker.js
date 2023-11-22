import React, { useState } from 'react';
import EventTracker from '../components/EventTracker/EventTracker';

const EventTrackerPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h1>Event Tracker Page</h1>
      <EventTracker /> {/* Render the EventTracker component */}
    </div>
  );
};

export default EventTrackerPage;