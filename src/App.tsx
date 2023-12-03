import React, { useEffect } from 'react';

import './App.css';
import './main.css';
import Header from './routes/header';
import Main from './routes/mainContent';
import ToRead from './routes/toRead';
import { Route, Routes } from 'react-router-dom';
import ToReadCompleted from './routes/toReadCompleted';

function App() {
  



  return (
    <div className="App">
     <Header />
      
     {/* <ToRead/> */}
     <Routes>
          {/* <Route  path="/" element={<Main />} /> */}
          <Route  path="/" element={<Main />} />
          <Route  path="/routes/toRead" element={<ToRead />} />
          <Route  path="/routes/toReadCompleted" element={<ToReadCompleted/>} />
         
        </Routes>
    </div>
  );
}

export default App;
