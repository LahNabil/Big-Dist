import React, { useState } from 'react';
import App from '../../App'; // Import your main App component

function AuthContainer() {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(true);
  };

  return (
    <App isLogin={isLogin} handleLogin={handleLogin} />
  );
}

export default AuthContainer;
