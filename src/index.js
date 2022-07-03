import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// let programmers = [
//   {name:"Ruba" , project:"programmers of the week" , bootcamp:"Python"},
//   {name:"Noura" , project:"movies List App" , bootcamp:"Python"},
//   {name:"Rahaf" , project:"flowers List App" , bootcamp:"Python"}
// ];
// const u = programmers.map(({name ,project,bootcamp})=>(
//   `Name:${name} Project:${project} bootcamp ${bootcamp}`).join(' '))

// const pl = programmers.map((n)=> console.log(n))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
