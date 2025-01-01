import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/AdminPanel.css';

const AdminPanel = () => {
  const [eventId, setEventId] = useState('');
  const [attendees, setAttendees] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (eventId) {
      fetchAttendees();
    }
  }, [eventId]);

  const fetchAttendees = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/events/attendees/${eventId}`
      );
      setAttendees(response.data);
    } catch (error) {
      console.error('Error fetching attendees:', error);
      alert('Error fetching attendees. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmAttendance = async (userId) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/points/generate`,
        {
          userId,
          eventId,
          action: 'attendance',
        }
      );
      alert(response.data.message);
      fetchAttendees(); // Refresh the list after confirming attendance
    } catch (error) {
      console.error('Error confirming attendance:', error);
      alert('Error confirming attendance. Please try again later.');
    }
  };

  return (
    <div className="admin-panel-container">
      <header className="admin-panel-header">
        <h1>Admin Panel - Confirm User Attendance</h1>
      </header>

      <div className="event-selection">
        <label htmlFor="eventId">Select Event:</label>
        <input
          type="text"
          id="eventId"
          value={eventId}
          onChange={(e) => setEventId(e.target.value)}
          placeholder="Enter event ID"
        />
        <button onClick={fetchAttendees} disabled={!eventId || loading}>
          Load Attendees
        </button>
      </div>

      {loading ? (
        <div>Loading attendees...</div>
      ) : (
        <div className="attendees-list">
          <h2>Attendees</h2>
          {attendees.length > 0 ? (
            <ul>
              {attendees.map((attendee) => (
                <li key={attendee.userId}>
                  <span>{attendee.userName}</span>
                  <button onClick={() => handleConfirmAttendance(attendee.userId)}>
                    Confirm Attendance
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No attendees found for this event.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
    