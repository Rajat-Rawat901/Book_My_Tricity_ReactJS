import React from "react";
import Navbar from "../Navbar";
import RibbonNav from "../RibbonNav";
import Footer from "../Footer";
import "./Banner.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function Sarbala({ user, onLogout }) {
    return (
        <>
        <Navbar user={user} onLogout={onLogout} />
        <RibbonNav />
     <section className="movie-banner" style={{"--movie-bg-image": "url('/images/sarbala_poster.jpg')"}}>
      <div className="banner-overlay">
        <div className="banner-content">
          <div className="poster">
            <img src="/images/sarbala_poster.jpg" alt="Sarbala Poster" />
          </div>
          <div className="movie-info">
            <h1>Sarbala Ji</h1>
            <div className="rating-box">
              <span className="star">★</span>
              <span className="rating">8.5/10</span>
              <span className="votes">(45K Votes)</span>
              <button className="rate-btn">Rate now</button>
            </div>
            <div className="tags">
              <span className="tag">2D</span>
              <span className="tag">Hindi</span>
            </div>
            <p className="meta">
              2h 15m • Comedy, Drama • UA 13+ • 25 Jul, 2025
            </p>
            <button className="book-btn">Book tickets</button>
          </div>
        </div>
      </div>
    </section>
    <section className="about-movie">
  <h2>About the Movie</h2>
  <p>
  Sarbala Ji is a heartwarming comedy-drama that follows the journey of a middle-aged man who discovers his true calling in life. Directed by acclaimed filmmaker Rajesh Kumar, the film stars veteran actor Amitabh Bachchan in a delightful role that showcases his versatility. The story revolves around Sarbala Ji, a simple man who becomes an unexpected hero in his community through his wisdom and kindness. With its blend of humor, emotion, and social commentary, the film has been praised for its authentic portrayal of small-town India and its universal themes of self-discovery and community service. The movie has received critical acclaim for its storytelling and performances, making it one of the most anticipated releases of 2025.
  </p>
  {/* Add more details as needed */}
</section>
    <Footer />
    </>
  );
}
