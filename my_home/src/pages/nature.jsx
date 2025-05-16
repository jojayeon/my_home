//마지막 마무리 페이지
//숲나무 사람이 같이 있는 이미지를 보여주고 글로 조자연이라는 것을 말해주면서 마무리 
//처음으로 돌아가는 버튼 
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import '../styles/nature.css'; // ✨ 새 CSS 파일 추가 예정

function Nature() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="nature-container">
        <h1>조자연입니다.</h1>
        <button className="return-button" onClick={() => navigate('/')}>
          처음
        </button>
      </div>
    </Layout>
  );
}

export default Nature;