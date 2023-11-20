import React, { useState } from 'react';
import ScheduleAppointment from '../components/Appointment/ScheduleAppointment';

const Appointment = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <ScheduleAppointment />
    </>
  );
};
export default Appointment;