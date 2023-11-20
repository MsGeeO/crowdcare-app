// NotesContext.js
import React, { createContext, useContext } from 'react';

const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const saveNoteToDatabase = (id, note) => {
    console.log(`Saving note with ID ${id}: ${note}`);
    // Implement your logic to save the note to the database or state
  };

  const contextValue = {
    saveNoteToDatabase,
    // Add other values and functions as needed
  };

  return (
    <NoteContext.Provider value={contextValue}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNoteContext = () => {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error('useNoteContext must be used within a NotesProvider');
  }
  return context;
};

export default NoteContext;