import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import Chat from './components/Chat';

function App() {
  return (


    <div className="App">
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />

            <Routes>

              {/* chat part */}
              <Route path="/" element={<Chat />} />

            </Routes>


            </AppBody>
        </>
      </Router>

    </div>
  );
}

export default App;


const AppBody = styled.div`

  display:flex;
  height: 100vh;
`;
