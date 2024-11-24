import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewTimeEntries() {
  const [timeEntries, setTimeEntries] = useState([]);

  useEffect(() => {
    const fetchTimeEntries = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/timeEntries');
        setTimeEntries(data);
      } catch (error) {
        console.error('Error fetching time entries:', error);
      }
    };
    fetchTimeEntries();
  }, []);

  return (
    <div>
      <h2>Logged Time Entries</h2>
      <ul>
        {timeEntries.map((entry) => (
          <li key={entry.id}>
            {entry.date} - {entry.hours} hours - {entry.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewTimeEntries;
