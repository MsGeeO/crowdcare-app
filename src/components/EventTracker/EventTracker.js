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

  const fullName = queryParams.get('fullName');
  const email = queryParams.get('email');
  const date = queryParams.get('date');
  const time = queryParams.get('time');
  const message = queryParams.get('message');

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
          {notesList.map((note, index) => (
            <NotesListItem key={index}>{note}</NotesListItem>
          ))}
        </NotesList>

        <Link to="/eventnotes">Go to Event Note Page</Link>
        <ViewNotesButton onClick={handleViewEventNotes}>View Event Notes</ViewNotesButton>
      </EventNotesContainer>
    </EventTrackerContainer>
  );
};

export default EventTracker;