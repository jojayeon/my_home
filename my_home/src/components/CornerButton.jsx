// components/CornerButton.jsx
// CornerButton.jsx
import { useNavigate } from "react-router-dom";
import "../styles/CornerButton.css"; // 아래 스타일을 여기에 작성

const CornerButton = ({ to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button onClick={handleClick} className="corner-button">
      다음
    </button>
  );
};

export default CornerButton;
