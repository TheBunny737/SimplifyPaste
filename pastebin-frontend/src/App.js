import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PastingComponent from './PastingComponent';
import PasteContent from './PasteContent';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PastingComponent />} />
        <Route path="/view/:id" element={<PasteContent />} />
      </Routes>
    </Router>
  );
};

export default App;