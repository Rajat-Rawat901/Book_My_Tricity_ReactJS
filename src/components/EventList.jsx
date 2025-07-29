import React from "react";
import "./EventList.css";

const events = [
  { id: 1, title: "Rock Concert", location: "Chandigarh", date: "2025-07-15" },
  { id: 2, title: "Tech Conference", location: "Mohali", date: "2025-08-01" },
  { id: 3, title: "Drama Night", location: "Panchkula", date: "2025-07-25" },
];

export default function EventList() {
  return (
    <section className="event-list">
      <h2>Upcoming Events</h2>
      <div className="events">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <h3>{event.title}</h3>
            <p>{event.location}</p>
            <p>{event.date}</p>
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}
