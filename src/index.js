import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from "./nav/nav";
import Header from './header/header';
import Section from './section/section';
import Footer from './footer/footer';
import reportWebVitals from './reportWebVitals';
import "./estilo.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Header />
    <Section />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
