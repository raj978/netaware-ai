import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';



const Dashboard = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Real-time Data',
        data: [],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  });
  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      const newLabel = new Date().toLocaleTimeString();
      const newData = Math.floor(Math.random() * 100);
      setData((prevData) => ({
        labels: [...prevData.labels, newLabel],
        datasets: [
          {
            ...prevData.datasets[0],
            data: [...prevData.datasets[0].data, newData],
          },
        ],
      }));
    }, 2000); // Update every 2 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="dashboard">
      <h1>Real-time Dashboard</h1>
      <Line data={data} />
    </div>
  );
};
export default Dashboard;
