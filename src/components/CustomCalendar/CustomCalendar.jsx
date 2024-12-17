import React, { useState } from "react";
import "./CustomCalendar.css";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const generateCalendar = (year, month) => {
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0);

  const calendar = [];
  const startDay = startDate.getDay();
  const totalDays = endDate.getDate();

  let week = Array(startDay).fill(null); // Fill initial empty slots
  for (let day = 1; day <= totalDays; day++) {
    week.push(day);
    if (week.length === 7) {
      calendar.push(week);
      week = [];
    }
  }
  if (week.length > 0) {
    calendar.push([...week, ...Array(7 - week.length).fill(null)]);
  }

  return calendar;
};

const CustomCalendar = () => {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState({});
  const calendar = generateCalendar(year, month);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleDateClick = (day) => {
    if (day) {
      const dateKey = `${year}-${month + 1}-${day}`;
      setSelectedDate(dateKey);
    }
  };

  const handleAddEvent = () => {
    const eventText = prompt("Enter event details:");
    if (eventText) {
      setEvents((prevEvents) => ({
        ...prevEvents,
        [selectedDate]: [...(prevEvents[selectedDate] || []), eventText],
      }));
    }
  };

  return (
    <div className="custom-calendar">
      <div className="calendar-header">
        <button onClick={() => setMonth((prev) => (prev === 0 ? 11 : prev - 1))}>
          &lt;
        </button>
        <h2>
          {monthNames[month]} {year}
        </h2>
        <button onClick={() => setMonth((prev) => (prev === 11 ? 0 : prev + 1))}>
          &gt;
        </button>
      </div>
      <div className="calendar-grid">
        {daysOfWeek.map((day) => (
          <div key={day} className="day-name">
            {day}
          </div>
        ))}
        {calendar.map((week, i) => (
          <div key={i} className="calendar-week">
            {week.map((day, j) => (
              <div
                key={j}
                className={`calendar-day ${
                  day ? "active-day" : "inactive-day"
                } ${
                  selectedDate === `${year}-${month + 1}-${day}` ? "selected" : ""
                }`}
                onClick={() => handleDateClick(day)}
              >
                {day}
                {day &&
                  events[`${year}-${month + 1}-${day}`] &&
                  events[`${year}-${month + 1}-${day}`].length > 0 && (
                    <div className="event-indicator"></div>
                  )}
              </div>
            ))}
          </div>
        ))}
      </div>
      {selectedDate && (
        <div className="event-details">
          <h3>Events on {selectedDate}</h3>
          <ul>
            {events[selectedDate]?.map((event, index) => (
              <li key={index}>{event}</li>
            )) || <p>No events</p>}
          </ul>
          <button onClick={handleAddEvent}>Add Event</button>
        </div>
      )}
    </div>
  );
};

export default CustomCalendar;
