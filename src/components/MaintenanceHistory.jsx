// src/components/MaintenanceHistory.js
import React, { useState } from 'react';
import './MaintenanceHistory.css';
import records from '../data/maintenanceRecords.json'; // Use the imported JSON data

const MaintenanceHistory = () => {
  const [maintenanceRecords, setMaintenanceRecords] = useState(records);

  return (
    <div className="maintenance-history">
      <h1>Maintenance and Service History</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Service</th>
            <th>Details</th>
            <th>Cost</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {maintenanceRecords.map((record, index) => (
            <tr key={index}>
              <td>{record.date}</td>
              <td>{record.service}</td>
              <td>{record.details}</td>
              <td>{record.cost}</td>
              <td>{record.name}</td> {/* Display the name */}
              <td>{record.email}</td> {/* Display the email */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MaintenanceHistory;
