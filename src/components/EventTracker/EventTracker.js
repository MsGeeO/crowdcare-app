import { useLocation, Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import {
  EventTrackerContainer,
  AppointmentDetailsContainer,
  EventNotesContainer,
  NotesList,
  NotesListItem,
  ViewNotesButton,
} from './EventTrackerStyling';

const EventTracker = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Ensure that query parameters have fallback values or error handling
  const fullName = queryParams.get('fullName') || 'N/A';
  const email = queryParams.get('email') || 'N/A';
  const date = queryParams.get('date') || 'N/A';
  const time = queryParams.get('time') || 'N/A';
  const message = queryParams.get('message') || 'N/A';

  const [notesList, setNotesList] = useState([]);
  const navigate = useNavigate();

  const handleViewEventNotes = () => {
    // Pass event details as query parameters
    navigate(`/event-note?eventNotes=${encodeURIComponent(JSON.stringify(notesList))}`);
  };

  return (
    <EventTrackerContainer>
      <AppointmentDetailsContainer>
        <h2>Booked Appointment Details</h2>
        <p><strong>Full Name:</strong> {fullName}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Time:</strong> {time}</p>
        <p><strong>Message:</strong> {message}</p>
      </AppointmentDetailsContainer>
      <EventNotesContainer>
        <h3>Event Notes</h3>

        <NotesList>
          {notesList.length > 0 ? (
            notesList.map((note, index) => (
              <NotesListItem key={index}>{note}</NotesListItem>
            ))
          ) : (
            <p>No event notes available.</p>
          )}
        </NotesList>

        <Link to="/eventnotes">Go to Event Note Page</Link>
        <ViewNotesButton onClick={handleViewEventNotes}>View Event Notes</ViewNotesButton>
      </EventNotesContainer>
    </EventTrackerContainer>
  );
};

export default EventTracker;