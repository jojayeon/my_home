//포트폴리오를 담당하는 페이지 
//팀프로젝트와 개인프로젝트를 따로 배치하여 작업을 얻허게 했는지 보여주는 자료들
//자료를 누르면 커지면서 보이게 하는게 목적 

import Layout from '../components/Layout';
import '../styles/leaf.css';
import CornerButton from '../components/CornerButton';

function Leaf() {
  return (
    <Layout>
      <div className="leaf-container">
        <div className="leaf-grid">
          <div className="leaf-box">🌱 감성</div>
          <div className="leaf-box">🌿 창의성</div>
          <div className="leaf-box">🍃 끈기</div>
          <div className="leaf-box">🍀 연결</div>
        </div>
        <CornerButton to="/stem" />
      </div>
    </Layout>
  );
}

export default Leaf;

