/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react';

// Component to display each doctor/patient
function Patient({ patient }) {
  return (
    <li>
      <strong>{patient.name}</strong> - Address: {patient.address}
    </li>
  );
}

// Main App Component
const HospitalApp = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchPatients = async () => {
    try {
      const response = await fetch('http://localhost:3000/patients');
      console.log(response);
      if (!response.ok) {
        throw new Error('Failed to fetch patients');
      }
      const data = await response.json();
      setPatients(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // useEffect for fetching patients from the hospital API
  useEffect(() => {
    fetchPatients();
  }, []);

  // Display loading, error, or doctor list
  if (loading) {
    return <p>Loading doctors...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Hospital Patients</h1>
      <ul>
        {patients.map(patient => (
          <Patient key={patient.id} patient={patient} />
        ))}
      </ul>
    </div>
  );
}

export default HospitalApp;