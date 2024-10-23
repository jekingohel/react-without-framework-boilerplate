import React from "react";
import './styles/index.scss';

const App = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  return (
    <div>
      <h1>React Simple Web Application Without using React Framework!</h1>
      <p>Env: {apiUrl}</p>
    </div>
  );
};

export default App;
