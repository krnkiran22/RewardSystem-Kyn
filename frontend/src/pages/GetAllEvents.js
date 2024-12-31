import React, { useState, useEffect } from 'react';
import "../styles/Eventcard.css"

const GetAllEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/events/get'); // Adjust API path if needed
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleBookClick = (eventId) => {
    // Replace this with your booking logic or redirect to a booking page
    alert(`Booking for event ID: ${eventId}`);
  };

  return (
    <div>
       <h2 className="flex justify-center items-center bg-red-500 text-white font-bold h-14 text-center w-full">
       All Events
      </h2>      
      <div className="events-container">
        {events.map((event) => (
          <div key={event._id} className="event-card">
            <h3 className="event-title">{event.name}</h3>
            <p className="event-description">{event.description}</p>
            <div className="event-details">
              <p className="event-ticket-price">Ticket Price: ₹{event.price}</p>
              <p className="event-available-tickets">Available Tickets: {event.availableTickets}</p>
            </div>
            <p className="event-date">{new Date(event.date).toLocaleDateString()}</p>
            <p className="event-location">{event.location}</p>
            <button 
             className="bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none hover:bg-green-600 active:bg-green-600"
             onClick={() => handleBookClick(event._id)}>
             Book
            </button>


          </div>
        ))}
      </div>
    </div>
  );
};

export default GetAllEvents;
