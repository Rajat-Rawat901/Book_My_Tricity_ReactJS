import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RecommendedMovies from "./components/RecommendedMovies";
import EventList from "./components/EventList";
import Footer from "./components/Footer";
import RibbonNav from "./components/RibbonNav";
import { Routes, Route } from "react-router-dom";
import Saiyaara from "./components/Movies/Saiyaara";
import Sarbala from "./components/Movies/Sarbala";
import FantasticFour from "./components/Movies/FantasticFour";
import Superman from "./components/Movies/Superman";

// Firebase and Login
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };



  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Navbar 
              user={user} 
              onLogout={handleLogout}
              showLogin={showLogin}
              setShowLogin={setShowLogin}
            />
            <RibbonNav />
            <Hero />
            <RecommendedMovies />
            <EventList />
            <Footer />
          </div>
        }
      />
      <Route path="/saiyaara" element={<Saiyaara user={user} onLogout={handleLogout} />} />
      <Route path="/sarbala" element={<Sarbala user={user} onLogout={handleLogout} />} />
      <Route path="/fantastic-four" element={<FantasticFour user={user} onLogout={handleLogout} />} />
      <Route path="/superman" element={<Superman user={user} onLogout={handleLogout} />} />
    </Routes>
  );
}
