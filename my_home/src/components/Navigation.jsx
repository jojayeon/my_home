// src/components/Navigation.jsx
// 상단 메뉴바(홈, 페이지 이동 등)
import { Link } from 'react-router-dom';
import '../styles/Navigation.css'
function Navigation() {
  return (
    <nav className="nav-bar">
      <Link to="/leaf">leaf</Link>
      <Link to="/stem">stem</Link>
      <Link to="/nature">nature</Link>
    </nav>
  );
}

export default Navigation;
