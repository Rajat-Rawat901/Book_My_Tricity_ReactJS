import { useState } from "react";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function LoginPopup({ onClose, onSkip, onSwitchToSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Debug: Check if auth is properly imported
  console.log("LoginPopup rendered, auth object:", auth);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);
    setError(""); // Clear any previous errors

    try {
      console.log("Attempting to sign in with:", email);
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful!");
      onClose(); // Close popup after successful login
    } catch (err) {
      console.error("Login error:", err);
      if (err.code === 'auth/user-not-found') {
        setError("No account found with this email address.");
      } else if (err.code === 'auth/wrong-password') {
        setError("Incorrect password.");
      } else if (err.code === 'auth/invalid-email') {
        setError("Invalid email address.");
      } else if (err.code === 'auth/too-many-requests') {
        setError("Too many failed attempts. Please try again later.");
      } else {
        setError("Login failed. Please check your credentials and try again.");
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
          <div className="text-xl font-semibold mb-4 text-center">Login to Book My Tricity</div>

          <div className="flex-column">
            <label>Email</label>
          </div>
          <div className="inputForm">
            <svg height="20" viewBox="0 0 32 32" width="20" xmlns="http://www.w3.org/2000/svg">
              <g id="Layer_3" data-name="Layer 3">
                <path d="... (your icon path) ..."></path>
              </g>
            </svg>
            <input
              type="email"
              className="input"
              placeholder="Enter your Email"
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
              <path d="... (your icon path) ..." />
            </svg>
            <input
              type="password"
              className="input"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="... (eye icon path) ..." />
            </svg>
          </div>

          {error && <div className="text-red-500 text-sm mb-2">{error}</div>}

          <div className="flex-row justify-between">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="ml-1">Remember me</label>
            </div>
            <span className="span">Forgot password?</span>
          </div>

          <button 
            className="button-submit mt-4" 
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          <button 
            type="button"
            className="button-skip mt-2" 
            onClick={onSkip}
            style={{
              background: 'transparent',
              border: '1px solid #ccc',
              color: '#666',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              width: '100%'
            }}
          >
            Skip Login
          </button>

          <p className="p">Don't have an account? <span className="span" onClick={onSwitchToSignup}>Sign Up</span></p>
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
