import styled from 'styled-components';
import NoteImg from '../../images/Notes.jpg';
import '../../fonts/webfont.css';

const EventNoteContainer = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  background-image: linear-gradient(to top right, #0b0a0a61, #0b0a0a30), url(${NoteImg});
  background-size: cover;
  color: #fff;
`;

const EventNoteHeader = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

const EventNoteDetails = styled.div`
  margin-bottom: 8px;
`;

const EventNoteTextarea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 8px;
`;

const EventNoteButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export {
  EventNoteContainer,
  EventNoteHeader,
  EventNoteDetails,
  EventNoteTextarea,
  EventNoteButton,
};