// components/CornerButton.jsx
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../styles/CornerButton.css';

function CornerButton({ to }) {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      navigate(to);
    }, 800); // 애니메이션 시간 후 이동
  };

  return (
    <div className={`corner-button-wrapper ${clicked ? 'clicked' : ''}`} onClick={handleClick}>
      <div className="corner-button">
        <span className="corner-text">다음</span>
      </div>
    </div>
  );
}

export default CornerButton;

