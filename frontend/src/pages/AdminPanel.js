import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/AdminPanel.css'; // External CSS for styling (or you can use inline styles)

const AdminPanel = () => {
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
      
    }
  };

  const handleEventSelect = async (eventId) => {
    if (!eventId) return;

    setSelectedEvent({ bookings: [] });  // Reset the bookings
    try {
      const response = await axios.get(`http://localhost:5000/api/events/${eventId}/getBookings`);
      if (response.data && response.data.bookings) {
        setSelectedEvent({ ...response.data, _id: eventId });
      } else {
        alert('No bookings found for this event.');
      }
    } catch (error) {
      console.error('Error fetching event bookings:', error);
      
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
    <div className="admin-panel-container">
      <h1 className="admin-panel-title">Admin Panel - Event Attendance</h1>
      <div className="event-selection">
        <label htmlFor="event-select" className="event-label">Select Event</label>
        <select
          id="event-select"
          className="event-dropdown"
          onChange={(e) => handleEventSelect(e.target.value)}
          value={selectedEvent._id || ''}
        >
          <option value="">Select Event</option>
          {events.map((event) => (
            <option key={event._id} value={event._id}>
              {event.title}
            </option>
          ))}
        </select>
      </div>

      {selectedEvent._id && (
        <div className="event-booking-card">
          <h2 className="event-booking-title">{selectedEvent.title}</h2>
          <div className="booking-list">
            {selectedEvent.bookings?.length > 0 ? (
              selectedEvent.bookings.map((booking) => (
                <div key={booking.userId} className="booking-item">
                  <p className="booking-user">User: {booking.userId}</p>
                  <p className="booking-tickets">Tickets: {booking.ticketCount}</p>
                  <div className="presence-actions">
                    <button
                      className="presence-button present-button"
                      onClick={() => handleConfirmPresence(booking.userId, true)}
                    >
                      Present
                    </button>
                    <button
                      className="presence-button absent-button"
                      onClick={() => handleConfirmPresence(booking.userId, false)}
                    >
                      Absent
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No bookings available for this event.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
