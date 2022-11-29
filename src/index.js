import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/header';
import "./components/bootstrap/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./components/custom.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <div style={{height : "100vh"}} className='d-flex flex-column'>
      <Header></Header>
    </div>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
