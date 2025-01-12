//AppointmentForm.js
import React, { useState } from "react";
const AppointmentForm = ({ addAppointment }) => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [number, setphoneNumber] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        addAppointment({ name, date, number,time });
        setName("");
        setDate("");
        setphoneNumber("");
        setTime("");
    };
    return (<div class="container">
        <form onSubmit={handleSubmit}>
            <div class="row">
                <div class="col-25">
                    <label for="fname">Full Name</label>
                </div>
                <div class="col-75">
                    <input type="text"
                        id="fname"
                        name="firstname"
                        placeholder="Your name.."
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="fname">Phone Number: </label>
                    </div>
                    <div class="col-75">
                        <input type="number"
                            id="fname"
                            name="firstname"
                            placeholder="0000-0000-00"
                            value={number}
                            onChange={(e) => setphoneNumber(e.target.value)} />
                    </div>
                    <div></div>

                    <div class="row">
                        <div class="col-25">
                            <label for="fname">Appointment Date: </label>
                        </div>
                        <div class="col-75">
                            <input id="fname" name="firstname"
                                placeholder="Your name.."
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="fname">Appointment Time: </label>
                        </div>
                        <div class="col-75">
                            <input id="fname"
                                name="firstname"
                                placeholder="your name.."
                                type="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <input type="submit" value="Add Appointment" />
            </div>
        </form>
    </div>);
};
export default AppointmentForm;