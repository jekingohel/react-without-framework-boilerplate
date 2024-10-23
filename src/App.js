import React from "react";

const App = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  console.log(apiUrl)
  return <h1>React Simple Web Application Without using React Framework!</h1>;
};

export default App;
