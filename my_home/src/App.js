// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/strat';
import Leaf from './pages/leaf';
import Stem from './pages/stem';
import Nature from './pages/nature';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaf" element={<Leaf />} />
        <Route path="/stem" element={<Stem />} />
        <Route path="/nature" element={<Nature />} />
      </Routes>
    </Router>
  );
}
export default App; 