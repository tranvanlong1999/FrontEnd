import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
//import Counter from './components/counter';
import 'font-awesome/css/font-awesome.css';
import Movies from './components/movies';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <Counter /> */}

    {/* <Counters /> */}
    {/* <App /> */}
    <Movies />
  </React.StrictMode>
);

reportWebVitals();
