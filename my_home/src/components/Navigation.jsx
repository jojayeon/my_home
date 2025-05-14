// src/components/Navigation.jsx
// 상단 메뉴바(홈, 페이지 이동 등)
import { Link } from 'react-router-dom';
import '../styles/Navigation.css'
function Navigation() {
  return (
    <nav className="nav-bar">
      <Link to="/">home</Link>
      <Link to="/page1">page1</Link>
      <Link to="/page2">page2</Link>
      <Link to="/page3">page3</Link>
    </nav>
  );
}

export default Navigation;
