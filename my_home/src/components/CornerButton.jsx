// components/CornerButton.jsx
// CornerButton.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CornerButton.css"; // 아래 스타일을 여기에 작성

const CornerButton = ({ to }) => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      navigate(to);
    }, 1500); // 애니메이션 지속시간
  };

  return (
    <div className={`corner-container ${isClicked ? "clicked" : ""}`}>
      <div className="cover-box" />
      <button className="corner-button" onClick={handleClick}>
        다음
      </button>
    </div>
  );
};

export default CornerButton;
