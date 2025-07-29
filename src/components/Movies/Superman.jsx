import React from "react";
import Navbar from "../Navbar";
import RibbonNav from "../RibbonNav";
import Footer from "../Footer";
import "./Banner.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Superman({ user, onLogout }) {
    return (
        <>
        <Navbar user={user} onLogout={onLogout} />
        <RibbonNav />
     <section className="movie-banner" style={{"--movie-bg-image": "url('/src/assets/superman_poster.jpg')"}}>
      <div className="banner-overlay">
        <div className="banner-content">
          <div className="poster">
            <img src="src\assets\superman_poster.jpg" alt="Superman Poster" />
          </div>
          <div className="movie-info">
            <h1>Superman</h1>
            <div className="rating-box">
              <span className="star">★</span>
              <span className="rating">8.9/10</span>
              <span className="votes">(112K Votes)</span>
              <button className="rate-btn">Rate now</button>
            </div>
            <div className="tags">
              <span className="tag">3D</span>
              <span className="tag">English</span>
            </div>
            <p className="meta">
              2h 38m • Action, Adventure, Drama • PG-13 • 15 Aug, 2025
            </p>
            <button className="book-btn">Book tickets</button>
          </div>
        </div>
      </div>
    </section>
    <section className="about-movie">
  <h2>About the Movie</h2>
  <p>
  Superman is a spectacular reimagining of the iconic superhero's origin story, directed by visionary filmmaker James Gunn. Starring David Corenswet as Clark Kent/Superman and Rachel Brosnahan as Lois Lane, this film explores the journey of Kal-El from his birth on the doomed planet Krypton to becoming Earth's greatest protector. Set in a world where superheroes are just beginning to emerge, the story follows Clark as he navigates his dual identity while facing the threat of the ruthless General Zod and his Kryptonian army. With stunning visual effects, emotional depth, and a fresh take on the beloved character, Superman delivers an epic tale of hope, heroism, and the power of truth and justice. The film has been hailed as a masterpiece that honors the character's legacy while bringing him into the modern era with groundbreaking storytelling and spectacular action sequences.
  </p>
  {/* Add more details as needed */}
</section>
    <Footer />
    </>
  );
} 