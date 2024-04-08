import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './apps/AppEx2_count';
import reportWebVitals from './reportWebVitals';
import Ex from './mui/00_Ex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <div style={{marginTop:'40px', marginLeft:'20px', marginRight:'20px', backgroundColor:'#ebebeb'}}>
      <BasicModal />
    </div> */}
    <Ex />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
