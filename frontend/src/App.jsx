import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
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
        const response = await axios.get("http://localhost:5000/api/data", {
          params: {
            start_year: startYear || null,
            end_year: endYear || null,
            sort_key: sortKey,
            descending: sortOrder === "desc",
          },
        });
        setData(response.data);
      } catch (err) {
        setError("Error fetching data from the server.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [startYear, endYear, sortKey, sortOrder]);

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3x1 font-bold text-center mb-8">
        Financial Data App
      </h1>

      {/* Filter Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Start Year:
          </label>
          <input
            type="number"
            value={startYear}
            onChange={(e) => setStartYear(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            End Year:
          </label>
          <input
            type="number"
            value={endYear}
            onChange={(e) => setEndYear(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
        <button
          onClick={() => {}}
          className="bg-blue-500 text-white font-medium py-2 px-4 rounded mt-auto"
        >
          Apply Filters
        </button>
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-200 w-full">
          <thead>
            <tr className="bg-gray-100">
              <th
                className="border px-4 py-2 cursor-pointer"
                onClick={() => handleSort("date")}
              >
                Date {sortKey === "date" && (sortOrder === "asc" ? "↑" : "↓")}
              </th>
              <th
                className="border px-4 py-2 cursor-pointer"
                onClick={() => handleSort("revenue")}
              >
                Revenue
                {sortKey === "revenue" && (sortOrder === "asc" ? "↑" : "↓")}
              </th>
              <th
                className="border px-4 py-2 cursor-pointer"
                onClick={() => handleSort("netIncome")}
              >
                Net Income
                {sortKey === "netIncome" && (sortOrder === "asc" ? "↑" : "↓")}
              </th>
              <th className="border px-4 py-2">Gross Profit</th>
              <th className="border px-4 py-2">EPS</th>
              <th className="border px-4 py-2">Operating Income</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{item.date}</td>
                <td className="border px-4 py-2">{item.revenue}</td>
                <td className="border px-4 py-2">{item.netIncome}</td>
                <td className="border px-4 py-2">{item.grossProfit}</td>
                <td className="border px-4 py-2">{item.eps}</td>
                <td className="border px-4 py-2">{item.operatingIncome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
