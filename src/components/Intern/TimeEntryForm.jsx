import React, { useState } from 'react';
import axios from 'axios';

function TimeEntryForm() {
  const [timeEntry, setTimeEntry] = useState({ date: '', hours: '', description: '' });

  const handleChange = (e) => {
    setTimeEntry({ ...timeEntry, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/timeEntries', timeEntry);
      alert('Time entry logged successfully!');
    } catch (error) {
      console.error('Error logging time entry:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log Time Entry</h2>
      <input type="date" name="date" onChange={handleChange} required />
      <input type="number" name="hours" placeholder="Hours" onChange={handleChange} required />
      <textarea name="description" placeholder="Description" onChange={handleChange} required />
      <button type="submit">Add Entry</button>
    </form>
  );
}

export default TimeEntryForm;
