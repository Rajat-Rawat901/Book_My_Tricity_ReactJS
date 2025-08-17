import React from "react";
import Navbar from "../Navbar";
import RibbonNav from "../RibbonNav";
import Footer from "../Footer";
import "./Banner.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function Saiyaara({ user, onLogout }) {
    return (
        <>
        <Navbar user={user} onLogout={onLogout} />
        <RibbonNav />
     <section className="movie-banner" style={{"--movie-bg-image": "url('/images/saiyaara_poster_bg.jpg')"}}>
      <div className="banner-overlay">
        <div className="banner-content">
          <div className="poster">
            <img src="/images/saiyaara_poster.jpg" alt="Saiyaara Poster" />
          </div>
          <div className="movie-info">
            <h1>Saiyaara</h1>
            <div className="rating-box">
              <span className="star">★</span>
              <span className="rating">8.7/10</span>
              <span className="votes">(67K Votes)</span>
              <button className="rate-btn">Rate now</button>
            </div>
            <div className="tags">
              <span className="tag">2D</span>
              <span className="tag">Hindi</span>
            </div>
            <p className="meta">
              2h 36m • Drama, Musical, Romantic • UA 16+ • 18 Jul, 2025
            </p>
            <button className="book-btn">Book tickets</button>
          </div>
        </div>
      </div>
    </section>
    <section className="about-movie">
  <h2>About the Movie</h2>
  <p>
  Saiyaara is a romantic musical drama directed by Mohit Suri, starring debutants Ahaan Panday and Aneet Padda. The film follows the emotional journey of Krish, a passionate musician, and Vaani, a gentle lyricist, whose love blossoms through their shared creativity. However, their bond is tested when Vaani is diagnosed with early-onset Alzheimer’s. With soulful music and heartfelt performances, the film touches on themes of love, memory, and loss. Critics praised its visuals and soundtrack, and it resonated especially with Gen-Z audiences. Saiyaara also proved to be a commercial success, becoming one of the top-grossing Bollywood films of 2025.  </p>
  {/* Add more details as needed */}
</section>
    <Footer />
    </>
  );
}
