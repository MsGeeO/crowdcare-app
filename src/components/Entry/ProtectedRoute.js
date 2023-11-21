import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from '../../context/userAuthContext';
import EventTracker from '../../components/EventTracker/EventTracker'; // Import your InfoSection component
import EventNote from '../../components/EventTracker/EventNote'; // Import your EventNotes component

/* Manages user access to dashboard upon successful authentication */
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  console.log("Check user in Private: ", user);

  if (!user) {
    return <Navigate to="/" />;
  }
  
  // Render both InfoSection and EventNotes when the user is authenticated
  return (
    <>
      <EventTracker />
      <EventNote />
      {children}
    </>
  );
};

export default ProtectedRoute;