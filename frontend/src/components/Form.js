import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  // Define useState for each form field
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [price, setPrice] = useState('');
  const [availableTickets, setAvailableTickets] = useState('');
  const [createdBy, setCreatedBy] = useState(''); // Add createdBy

  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Prepare form data
      const eventData = {
        title,
        description,
        date,
        venue,
        price: parseInt(price), // Ensure price is an integer
        availableTickets: parseInt(availableTickets), // Ensure availableTickets is an integer
        
      };

      // Make a POST request to the backend API
      const response = await axios.post('http://localhost:5000/api/events/create', eventData);
      setMessage('Event created successfully!');
      setIsError(false);
      console.log(response.data);
    } catch (error) {
      setMessage('Failed to create event. Please try again.');
      setIsError(true);
      console.error(error.response ? error.response.data : error.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create Event</h2>
      {message && (
        <p style={{ ...styles.message, color: isError ? 'red' : 'green' }}>
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={styles.textarea}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Date:</label>
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Venue:</label>
          <input
            type="text"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Available Tickets:</label>
          <input
            type="number"
            value={availableTickets}
            onChange={(e) => setAvailableTickets(e.target.value)}
            style={styles.input}
            required
          />
        </div>
       
        <button type="submit" style={styles.button}>
          Create Event
        </button>
      </form>
    </div>
  );
};

// Styling remains the same...

// Styling for the form
const styles = {
    container: {
      maxWidth: '600px',
      margin: '20px auto',
      padding: '20px',
      borderRadius: '10px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      textAlign: 'center',
      color: '#333',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      marginBottom: '5px',
      fontWeight: 'bold',
      color: '#555',
    },
    input: {
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      outline: 'none',
      fontSize: '14px',
    },
    textarea: {
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      outline: 'none',
      fontSize: '14px',
      minHeight: '80px',
    },
    button: {
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#007BFF',
      color: 'white',
      fontSize: '16px',
      cursor: 'pointer',
      alignSelf: 'center',
      marginTop: '10px',
    },
    message: {
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '14px',
    },
  };
  
export default Form;

