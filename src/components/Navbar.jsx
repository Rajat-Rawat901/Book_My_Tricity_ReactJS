import React, { useState } from "react";
import "./Navbar.css";
import { Search } from 'lucide-react';
import { ChevronDown } from "lucide-react";
import Login from "./Login";
import Signup from "./Signup";

export default function Navbar({ searchTerm = "", setSearchTerm = () => {}, user, onLogout, showLogin, setShowLogin }) {
  const [showSignup, setShowSignup] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleSignIn = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleSkipLogin = () => {
    setShowLogin(false);
  };

  const handleCloseSignup = () => {
    setShowSignup(false);
  };

  const handleSwitchToSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  const handleSwitchToLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  const handleLogoutClick = async () => {
    setIsLoggingOut(true);
    try {
      await onLogout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <button
          className="logo-button"
          onClick={() => (window.location.href = "/")}
          aria-label="Go to home page"
        >
          <img src="/Images/Book_my_tricity.svg" alt="BookMyTricity" className="logo-img" />
        </button>

        <div className="center-content">
          <div className="search-bar">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div class="menu">
          <div class="item">
            <a href="#" class="link">
              <span> Select City </span>
              <svg viewBox="0 0 360 360" xml:space="preserve">
                <g id="SVGRepo_iconCarrier">
                  <path
                    id="XMLID_225_"
                    d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                  ></path>
                </g>
              </svg>
            </a>
            <div class="submenu">
              <div class="submenu-item">
                <a href="#" class="submenu-link"> Chandigargh </a>
              </div>
              <div class="submenu-item">
                <a href="#" class="submenu-link"> Mohali </a>
              </div>
              <div class="submenu-item">
                <a href="#" class="submenu-link"> Panchkula </a>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {user ? (
            <div className="user-section">
              <span className="user-welcome">
                Welcome, {user.displayName || (user.email ? user.email.split('@')[0] : 'User')}
              </span>
              <button className="button logout" onClick={handleLogoutClick} disabled={isLoggingOut}>
                <span className="lable">{isLoggingOut ? "Logging out..." : "Logout"}</span>
              </button>
            </div>
          ) : (
            <button class="button" onClick={handleSignIn}>
              <span class="lable">Sign in</span>
            </button>
          )}
        </div>
        <input class="toggle-checkbox" id="toggle" type="checkbox" />
        <label class="hamburger" for="toggle">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </label>
      </nav>
      
      {showLogin && (
        <Login 
          onClose={handleCloseLogin} 
          onSkip={handleSkipLogin}
          onSwitchToSignup={handleSwitchToSignup}
        />
      )}
      
      {showSignup && (
        <Signup 
          onClose={handleCloseSignup}
          onSwitchToLogin={handleSwitchToLogin}
        />
      )}
    </>
  );
}