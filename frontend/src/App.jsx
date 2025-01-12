import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [minRevenue, setMinRevenue] = useState("");
  const [maxRevenue, setMaxRevenue] = useState("");
  const [sortKey, setSortKey] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          
        )
      }
    }
    axios
      .get("/api/data", {
        params: { start_year: 2020, end_year: 2023 },
      })
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      <header>
        <h1>Financial Data App</h1>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Revenue</th>
              <th>Net Income</th>
              <th>Gross Profit</th>
              <th>EPS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.revenue}</td>
                <td>{item.netIncome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <footer>
        <p>&copy; 2025 Financial App</p>
      </footer>
    </div>
  );
}

export default App;
