import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8084/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        navigate("/admin");
      } else {
        console.log("erreur");
        const errorMessage = await response.text(); // Extract the error message
        console.log(errorMessage);
        // Display the error message to the user, e.g., in a notification
      }
    } catch (error) {
      // Handle network or request error
      console.error('Network error:', error);
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete='email'
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete=""
        />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default Login;
