import React from "react";
import Navbar from "../Navbar";
import RibbonNav from "../RibbonNav";
import Footer from "../Footer";
import "./Banner.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function FantasticFour({ user, onLogout }) {
    return (
        <>
        <Navbar user={user} onLogout={onLogout} />
        <RibbonNav />
     <section className="movie-banner" style={{"--movie-bg-image": "url('/images/fantastic_poster.jpg')"}}>
      <div className="banner-overlay">
        <div className="banner-content">
          <div className="poster">
            <img src="/images/fantastic_poster.jpg" alt="The Fantastic Four Poster" />
          </div>
          <div className="movie-info">
            <h1>The Fantastic Four</h1>
            <div className="rating-box">
              <span className="star">★</span>
              <span className="rating">8.2/10</span>
              <span className="votes">(89K Votes)</span>
              <button className="rate-btn">Rate now</button>
            </div>
            <div className="tags">
              <span className="tag">3D</span>
              <span className="tag">English</span>
            </div>
            <p className="meta">
              2h 45m • Action, Adventure, Sci-Fi • PG-13 • 30 Jul, 2025
            </p>
            <button className="book-btn">Book tickets</button>
          </div>
        </div>
      </div>
    </section>
    <section className="about-movie">
  <h2>About the Movie</h2>
  <p>
  The Fantastic Four is a thrilling superhero adventure that brings Marvel's first family to life in an epic new way. Directed by acclaimed filmmaker Matt Shakman, the film stars Pedro Pascal as Reed Richards (Mr. Fantastic), Vanessa Kirby as Sue Storm (Invisible Woman), Joseph Quinn as Johnny Storm (Human Torch), and Ebon Moss-Bachrach as Ben Grimm (The Thing). When a cosmic storm gives four astronauts incredible powers, they must learn to work together as a team to save Earth from the mysterious threat of Galactus and his herald, the Silver Surfer. With groundbreaking visual effects, heart-pounding action sequences, and a compelling story about family and sacrifice, The Fantastic Four delivers the ultimate superhero experience. The film has been praised for its faithful adaptation of the beloved comic book series and its stunning portrayal of the team's iconic powers.
  </p>
  {/* Add more details as needed */}
</section>
    <Footer />
    </>
  );
} 