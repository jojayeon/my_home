// src/components/Layout.jsx
// 기본 바탕 
import Navigation from './Navigation';
import '../styles/Layout.css'

function Layout({ children }) {
  return (
    <div className="layout-wrapper">
      <Navigation />
      <div className="layout-content">
        {children}
      </div>
    </div>
  );
}

export default Layout;
