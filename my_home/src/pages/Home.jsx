// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import '../styles/Home.css'

function Home() {
  return (
    <div className="home-wrapper">
      <h1>자 연</h1>
      <div className="home-buttons">
        <Link to="/page1">page1</Link>
        <Link to="/page2">page2</Link>
        <Link to="/page3">page3</Link>
      </div>
    </div>
  );
}

export default Home;
