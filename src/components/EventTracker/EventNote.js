// EventNote.js
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useNoteContext } from '../../context/NoteContext'; // Import your notes context
import {
  EventNoteContainer,
  EventNoteDetails,
  EventNoteHeader,
  EventNoteTextarea,
  EventNoteButton,
} from "./EventNoteStyling";

const EventNote = ({ appointmentData, setSavedNotes }) => {
  const [notes, setNotes] = useState("");
  const { saveNoteToDatabase } = useNoteContext();

  const handleNoteChange = (e) => {
    setNotes(e.target.value);
  };

  const saveNote = () => {
    // Check if appointmentData or its properties are undefined
    if (!appointmentData || !appointmentData.id) {
      // Handle the case where appointmentData is undefined or missing properties
      console.error("Invalid appointmentData:", appointmentData);
      return;
    }

    // Save note to state or database
    saveNoteToDatabase(appointmentData.id, notes);

    // If you want to display saved notes, consider using state to manage them
    setSavedNotes((prevNotes) => [
      ...prevNotes,
      {
        id: appointmentData.id,
        note: notes,
      },
    ]);

    // Clear the notes after saving
    setNotes("");
  };

  return (
    <EventNoteContainer>
      <EventNoteHeader>Event Notes</EventNoteHeader>
      <EventNoteDetails>
        <strong>Full Name:</strong> {appointmentData?.fullName || "N/A"}
      </EventNoteDetails>
      <EventNoteDetails>
        <strong>Date:</strong> {appointmentData?.date || "N/A"}
      </EventNoteDetails>
      <EventNoteDetails>
        <strong>Time:</strong> {appointmentData?.time || "N/A"}
      </EventNoteDetails>
      <EventNoteDetails>
        <strong>Email:</strong> {appointmentData?.email || "N/A"}
      </EventNoteDetails>
      <EventNoteTextarea
        rows={5}
        placeholder="Add your notes here..."
        value={notes}
        onChange={handleNoteChange}
      />
      <EventNoteButton onClick={saveNote}>Save Note</EventNoteButton>
    </EventNoteContainer>
  );
};

export default EventNote;