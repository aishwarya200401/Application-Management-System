//App.js
import React, { useState } from "react";
import "./App.css";
import AppointmentForm from "./component/AppointmentForm";
import AppointmentList from "./component/AppointmentList";
const App = () => {
  const [appointments, setAppointments] = useState([]);
  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };
  const deleteAppointment = (index) => {
    const deletedAppointments = [...appointments];
    deletedAppointments.splice(index, 1);
    setAppointments(deletedAppointments);
  };
  const editAppointment = (index, editedName, editedDate, editedNumber, editedTime) => {
    const updatedAppointments = [...appointments];
    updatedAppointments[index] = { name: editedName, date: editedDate, number: editedNumber, time: editedTime };
    setAppointments(updatedAppointments);
  };
  const clearAppointments = () => {
    setAppointments([]);
  };
  return (
    <div>
      <h1>Appointment Management System</h1>
      <AppointmentForm addAppointment={addAppointment} />
      <AppointmentList appointments={appointments}
        deleteAppointment={deleteAppointment} clearAppointments={clearAppointments}
        editAppointment={editAppointment} />
    </div>
  );
};
export default App;


