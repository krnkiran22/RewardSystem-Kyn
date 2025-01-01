import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Adminpanel = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState({ bookings: [] });  // Default to an empty array

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/events/get');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
      alert('Error fetching events. Please try again later.');
    }
  };

  const handleEventSelect = async (eventId) => {
    setSelectedEvent({ bookings: [] });  // Reset the bookings
    try {
      const response = await axios.get(`http://localhost:5000/api/events/${eventId}/getBookings`);
      setSelectedEvent({ ...response.data, _id: eventId });  // Assuming response.data contains the bookings
    } catch (error) {
      console.error('Error fetching event bookings:', error);
      alert('Error fetching bookings. Please try again later.');
    }
  };
  

  const handleConfirmPresence = async (userId, isPresent) => {
    try {
      await axios.patch(
        `http://localhost:5000/api/events/${selectedEvent._id}/confirm-presence`,
        { userId, isPresent }
      );
      alert('Presence confirmed');
    } catch (error) {
      console.error('Error confirming presence:', error);
      alert('Error confirming presence. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Admin Panel - Event Attendance</h1>
      <div>
        <label>Select Event:</label>
        <select onChange={(e) => handleEventSelect(e.target.value)}>
          <option value="">Select Event</option>
          {events.map((event) => (
            <option key={event._id} value={event._id}>{event.title}</option>
          ))}
        </select>
      </div>

      {selectedEvent._id && (
        <div>
          <h2>Event Bookings for {selectedEvent.title}</h2>
          <ul>
            {selectedEvent.bookings?.map((booking) => (
              <li key={booking.userId}>
                <p>User: {booking.userId}</p>
                <p>Tickets: {booking.ticketCount}</p>
                <button onClick={() => handleConfirmPresence(booking.userId, true)}>Present</button>
                <button onClick={() => handleConfirmPresence(booking.userId, false)}>Absent</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Adminpanel;
