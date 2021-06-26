import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//here above render() takes a HTML element or JSX and place it inside index.html element with id="root"
//render() takes 2 parameter ,
//1st parameter contain tag element ,2nd parameter contain location of root element where 1st element is to be placed
