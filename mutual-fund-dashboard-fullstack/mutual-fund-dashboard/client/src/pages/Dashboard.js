import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const fetchPortfolio = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/portfolio', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPortfolio(res.data.portfolio);
    };
    fetchPortfolio();
  }, []);

  return (
    <div>
      <h2>Your Portfolio</h2>
      <ul>
        {portfolio.map((fund, i) => (
          <li key={i}>
            {fund.fundName} - Units: {fund.units} - NAV: ₹{fund.nav} - Value: ₹{fund.currentValue}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;