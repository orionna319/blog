import React from 'react'
import Layout from './views/Layout'
import Progress from './views/Progress'
import Canvas from './views/Canvas'
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './views/ErrorPage';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/blog" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blog/progress" element={<Progress />} />
          <Route path="/blog/canvas" element={<Canvas />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
