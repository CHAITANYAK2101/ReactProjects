import React from 'react';
import UserContextProvider from './context/UserContextProvider';
import Login from './Components/Login';
import Profile from './Components/Profile';
import "./index.css"

function App() {
  
  return (
    <UserContextProvider>
      <h1>React Form Using Context Api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
