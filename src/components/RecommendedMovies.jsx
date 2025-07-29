import React from "react";
import "./RecommendedMovies.css";
import { useNavigate } from "react-router-dom";

const movies = [
  {
    id: 1,
    title: "Saiyaara",
    poster: "/images/Saiyaara.jpg",
  },
  {
    id: 2,
    title: "Sarbala Ji",
    poster: "/images/Sarbala_Ji.jpg",
  },
  {
    id: 3,
    title: "The Fantastic Four",
    poster: "/images/The_Fantastic_Four.jpg",
  },
  {
    id: 4,
    title: "Superman",
    poster: "/images/Superman.jpg",
  },
];

const RecommendedMovies = () => {
  const navigate = useNavigate();
  return (
    <section className="recommended-section">
      <div className="recommended-header">
        <h2>Recommended Movies</h2>
        <a href="#" className="see-all">
          See All ›
        </a>
      </div>
      <div className="recommended-list">
        {movies.map((movie) => (
          <div
            className="movie-card"
            key={movie.id}
            onClick={
              movie.title === "Saiyaara"
                ? () => navigate("/saiyaara")
                : movie.title === "Sarbala Ji"
                ? () => navigate("/sarbala")
                : movie.title === "The Fantastic Four"
                ? () => navigate("/fantastic-four")
                : movie.title === "Superman"
                ? () => navigate("/superman")
                : undefined
            }
            style={
              movie.title === "Saiyaara" || 
              movie.title === "Sarbala Ji" || 
              movie.title === "The Fantastic Four" || 
              movie.title === "Superman"
                ? { cursor: "pointer" }
                : undefined
            }
          >
            <img src={movie.poster} alt={movie.title} />
            <p className="movie-title">{movie.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedMovies;
