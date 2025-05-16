//자기소개하는 페이지
//내 기본적인 스펙과 이야기를 적을 것
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import '../styles/stem.css'; // ✨ 새로운 CSS 파일 추가 예정

function Stem() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="stem-container">
        <div className="intro-box">
          <h1>안녕하세요, 저는 조자연입니다.</h1>
          <p>
            저는 자연과 같은 조화를 추구하며, 기술과 감성을 잇는 개발자가 되고 싶습니다. <br />
            이 포트폴리오는 저의 생각과 정체성을 자연이라는 이야기로 풀어냈습니다.
          </p>
        </div>
        <button className="next-button" onClick={() => navigate('/nature')}>
          다음
        </button>
      </div>
    </Layout>
  );
}

export default Stem;
