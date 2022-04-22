import React from 'react';
import ReactDOM from 'react-dom';

import Welcome from "./components/welcome.jsx";
//import Game from "./components/game.jsx";


const container = document.getElementById('root')

ReactDOM.render(<Welcome />,container)
//ReactDOM.render(<Game />,container)

//codigo de create react
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import welcome from "./components/welcome.jsx";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
