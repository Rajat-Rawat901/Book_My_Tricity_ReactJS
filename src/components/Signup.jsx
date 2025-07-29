import { useState } from "react";
import "./Signup.css";
import { createUserWithEmailAndPassword, signInAnonymously } from "firebase/auth";
import { auth } from "../firebase";

export default function SignupPopup({ onClose, onSwitchToLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Debug: Check if auth is properly imported
  console.log("SignupPopup rendered, auth object:", auth);

  // Test Firebase connection
  const testFirebaseConnection = async () => {
    try {
      console.log("Testing Firebase connection...");
      await signInAnonymously(auth);
      console.log("Firebase connection test successful!");
      // Sign out immediately after test
      await auth.signOut();
    } catch (err) {
      console.error("Firebase connection test failed:", err);
    }
  };

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword || !fullName) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);
    setError(""); // Clear any previous errors

    try {
      console.log("Attempting to create account with:", email);
      console.log("Auth object:", auth);
      console.log("Firebase config check:", auth.app.options);
      
      // Test Firebase connection first
      await testFirebaseConnection();
      
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signup successful!");
      onClose(); // Close popup after successful signup
    } catch (err) {
      console.error("Signup error:", err);
      console.error("Error code:", err.code);
      console.error("Error message:", err.message);
      
      if (err.code === 'auth/email-already-in-use') {
        setError("An account with this email already exists.");
      } else if (err.code === 'auth/invalid-email') {
        setError("Invalid email address.");
      } else if (err.code === 'auth/weak-password') {
        setError("Password is too weak. Please choose a stronger password.");
      } else if (err.code === 'auth/operation-not-allowed') {
        setError("Email/password accounts are not enabled. Please contact support.");
      } else if (err.code === 'auth/network-request-failed') {
        setError("Network error. Please check your internet connection and try again.");
      } else if (err.code === 'auth/too-many-requests') {
        setError("Too many failed attempts. Please try again later.");
      } else if (err.code === 'auth/user-disabled') {
        setError("This account has been disabled. Please contact support.");
      } else {
        setError(`Signup failed: ${err.message || 'Unknown error occurred'}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close">×</button>

        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <div className="text-xl font-semibold mb-4 text-center">Create Account</div>

          <div className="flex-column">
            <label>Full Name</label>
          </div>
          <div className="inputForm">
            <svg height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
            </svg>
            <input
              type="text"
              className="input"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="flex-column">
            <label>Email</label>
          </div>
          <div className="inputForm">
            <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg">
              <g id="Layer_3" data-name="Layer 3">
                <path d="M30.854 16.548A15.881 15.881 0 0 0 16 0C7.164 0 .001 7.164.001 16.001S7.164 32 16 32c8.837 0 16-7.164 16-16 0-.297-.01-.59-.025-.88L30.854 16.548zM16 30C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z" fill="currentColor"/>
                <path d="M16 8c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z" fill="currentColor"/>
              </g>
            </svg>
            <input
              type="email"
              className="input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex-column">
            <label>Password</label>
          </div>
          <div className="inputForm">
            <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M336 512H96c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h240c17.7 0 32 14.3 32 32v416c0 17.7-14.3 32-32 32zM96 64v416h240V64H96z" fill="currentColor"/>
            </svg>
            <input
              type="password"
              className="input"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm211.3 43.3c-6.2 6.2-16.4 6.2-22.6 0L224 306.7l-31.3 31.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L201.4 284l-31.3-31.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L224 261.4l31.3-31.3c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L246.6 284l31.3 31.3c6.2 6.2 6.2 16.4 0 22.6z" fill="currentColor"/>
            </svg>
          </div>

          <div className="flex-column">
            <label>Confirm Password</label>
          </div>
          <div className="inputForm">
            <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M336 512H96c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h240c17.7 0 32 14.3 32 32v416c0 17.7-14.3 32-32 32zM96 64v416h240V64H96z" fill="currentColor"/>
            </svg>
            <input
              type="password"
              className="input"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm211.3 43.3c-6.2 6.2-16.4 6.2-22.6 0L224 306.7l-31.3 31.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L201.4 284l-31.3-31.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L224 261.4l31.3-31.3c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L246.6 284l31.3 31.3c6.2 6.2 6.2 16.4 0 22.6z" fill="currentColor"/>
            </svg>
          </div>

          {error && <div className="text-red-500 text-sm mb-2">{error}</div>}

          <div className="flex-row justify-between">
            <div>
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms" className="ml-1">I agree to the Terms & Conditions</label>
            </div>
          </div>

          <button 
            className="button-submit mt-4" 
            onClick={handleSignup}
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          <p className="p">Already have an account? <span className="span" onClick={onSwitchToLogin}>Sign In</span></p>
          <p className="p line">Or With</p>

          <div className="flex-row">
            <button type="button" className="btn google">
              {/* Google Icon */}
              Google
            </button>
            <button type="button" className="btn apple">
              {/* Apple Icon */}
              Apple
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 