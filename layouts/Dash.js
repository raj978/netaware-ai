import BarChart from '@components/BarChart';
import LineChart from '@components/LineChart';
import PieChart from '@components/PieChart';
import { useState } from 'react';

const HomePage = () => {
  const [text, setText] = useState('');

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '30%' }}>
          <h2>Bar Chart</h2>
          <BarChart />
        </div>
        <div style={{ width: '30%' }}>
          <h2>Line Chart</h2>
          <LineChart />
        </div>
        <div style={{ width: '30%' }}>
          <h2>Pie Chart</h2>
          <PieChart />
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h2>Input Text Information</h2>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="4"
          style={{ width: '100%', padding: '10px' }}
        />
      </div>
    </div>
  );
};

export default HomePage;
