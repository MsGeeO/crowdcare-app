import styled from 'styled-components';
import TrackerImg from '../../images/Tracker.jpeg';
import '../../fonts/webfont.css';

export const EventTrackerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-image: url(${TrackerImg});
  background-size: cover;
  color: #fff; /* Set text color to white or a contrasting color */
`;

export const AppointmentDetailsContainer = styled.div`
  margin-bottom: 20px;
`;

export const EventNotesContainer = styled.div`
  margin-top: 20px;
`;

export const NotesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const NotesListItem = styled.li`
  margin-bottom: 8px;
`;

export const ViewNotesButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;