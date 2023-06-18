import React, { useEffect, useState } from "react";
import { Link, scroller } from "react-scroll";
import Navigation from "./components/navigation";
import DailyCommentary from "./components/commentary";
import Tables from "./components/tables";
import Chart from "./components/chart";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PropagateLoader } from "react-spinners";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [date, setDate] = useState(new Date());
  const [submittedDate, setSubmittedDate] = useState("");
  const [commentary, setCommentary] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedDate(date.toLocaleDateString("en-GB"));
  };

  const fetchData = async (formattedDate) => {
    const vesselRouteCodes = ["CP1", "CP2", "CP3", "CP4", "CP5", "CP7"];

    try {
      const responses = await Promise.all(
        vesselRouteCodes.map((route) =>
          fetch(
            `https://www.ssyreports.com/api/ExampleEodPrices/ArfNBYtWnXr9sTHq/${route}/${formattedDate}`
          )
        )
      );
      const data = await Promise.all(
        responses.map((response) => response.json())
      );
      setData(data);
    } catch (error) {
      console.log(error);
      setData([]); // Reset data if the request fails
    }

    try {
      const commentaryResponse = await fetch(
        `https://www.ssyreports.com/api/ExampleEodCommentary/ArfNBYtWnXr9sTHq/${formattedDate}`
      );
      const commentaryData = await commentaryResponse.json();
      console.log(commentaryData);
      setCommentary(commentaryData);
    } catch (error) {
      console.log(error);
      setCommentary([]); // Reset commentary if the request fails
    }
  };

  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");

    const dateToday = `${day}/${month}/${year}`;
    setDate(new Date(year, month - 1, day));

    const formattedDate = `${year}${month}${day}`;
    if (!submittedDate) {
      fetchData(formattedDate);
    } else {
      const formattedSubmittedDate = submittedDate
        .split("/")
        .reverse()
        .join("");
      fetchData(formattedSubmittedDate);
    }
  }, [submittedDate]);

  const color = "#ffffff"; // Specify the desired color for the loader
  const override = ""; // Provide any necessary CSS override for the loader

  return (
    <div className="App">
      {loading ? (
        <div className="loader-container">
          <PropagateLoader
            color={"#000"}
            loading={loading}
            css={override}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <Navigation />
          <div className="section-title" id="dataTables">
            <h2 className="mb-3">DATA TABLES</h2>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Enter Date: */}
            <label className="shadow-lg border-dark me-2 mb-5">
              <DatePicker
                selected={date}
                onChange={(selectedDate) => setDate(selectedDate)}
                dateFormat="dd/MM/yyyy"
                placeholderText="dd/mm/yyyy"
                className="date-picker"
                autoComplete="off"
                maxDate={new Date()} // Set maxDate to prevent selecting dates after the current date
              />
            </label>
            <button
              className="btn-sm btn-light rounded-5 px-3 border-dark text-dark shadow-lg"
              type="submit"
            >
              Submit
            </button>
          </form>

          <Tables
            data={data}
            date={submittedDate || (date && date.toLocaleDateString("en-GB"))} // Add a null check before accessing toLocaleDateString
          />

          {commentary.length > 0 && (
            <>
              <DailyCommentary
                date={
                  submittedDate || (date && date.toLocaleDateString("en-GB"))
                } // Add a null check before accessing toLocaleDateString
                comments={commentary}
              />
            </>
          )}

          <div className="section-title" id="chart">
            <h2>CHART</h2>
          </div>
          <Chart />
        </>
      )}
    </div>
  );
}

export default App;
