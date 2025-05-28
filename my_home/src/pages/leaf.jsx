import Layout from '../components/Layout';
import '../styles/leaf.css';
import CornerButton from '../components/CornerButton';

function Leaf() {
  return (
    <Layout>
      <div className="leaf-container">
        <div className="leaf-grid">
          {/* RockCoders */}
          <div className="leaf-box">
            <div className="leaf-title">RockCoders<br />(팀 프로젝트)</div>
            <div className="leaf-hover-content">
              <img src="/images/rock.png" alt="RockCoders" />
              <p>
                <strong className="leaf-subtitle">ERP 프로그램</strong><br />
                햄버거가게 키오스크를 제작하였습니다.<br />
                서버, 데이터베이스, 프론트, 백 서버를 따로 제작하였습니다.<br />
                배포하지 않았습니다.<br />
                <a href="https://docs.google.com/presentation/d/1Jsdp6TBzEXzpmEvt4ZjG81KOUTWrJ_SI/edit?usp=sharing&ouid=110668444643597630550&rtpof=true&sd=true" download className="leaf-link">
                  ppt 보기
                </a><br />
                <a href="https://github.com/KDT-IaaS-Class-Two-Group/RockCoders" target="_blank" rel="noopener noreferrer" className="leaf-link small-margin">
                  깃허브 바로가기
                </a>
              </p>
            </div>
          </div>

          {/* 호랑이 팀 */}
          <div className="leaf-box">
            <div className="leaf-title">호랑이 팀<br />(팀 프로젝트)</div>
            <div className="leaf-hover-content">
              <img src="/images/team2.jpg" alt="호랑이 팀" />
              <p>
                <strong className="leaf-subtitle">머신러닝을 이용한 학습</strong><br />
                머신러닝으로 UFC선수들의 데이터를 이용하여 학습을하고 
                <br />사람들의 전투력을 전투력을 측정하는 머신러닝 모델.
                <br /> 측정한 모델로 하는 생존 게임<br />
                <a href="https://drive.google.com/file/d/169KFih1yHgZAl6hqTGO4Kmfigx3fwzl1/view?usp=sharing" download className="leaf-link">
                  ppt 보기
                </a><br />
                <a href="https://github.com/KDT-IaaS-Class-Two-Group/KDT-IaaS-2-ProjectB-2team" target="_blank" rel="noopener noreferrer" className="leaf-link small-margin">
                  깃허브 바로가기
                </a>
              </p>
            </div>
          </div>

          {/* 대전 맛집 지도 */}
          <div className="leaf-box">
            <div className="leaf-title">대전 맛집 지도<br />(개인 프로젝트)</div>
            <div className="leaf-hover-content">
              <img src="/images/map.jpg" alt="대전 맛집 지도" />
              <p>
                <strong className="leaf-subtitle">대전 맛집</strong><br />
                데이터 분석을 중점으로 두고 진행한 프로젝트입니다. <br />
                블루리본과 카카오맵 평점, 리뷰 분석까지 
                <br />총 3가지를 중점으로 판단한 맛집 지도.<br />
                <a href=" https://myrestaurant.s3.ap-northeast-2.amazonaws.com/restaurant_map2.html" rel="noopener noreferrer" className="leaf-link small-margin">
                  바로가기
                </a><br />
                <a href="https://github.com/jojayeon/py-Really_delicious_restaurant" target="_blank" rel="noopener noreferrer" className="leaf-link small-margin">
                  깃허브 바로가기
                </a>
              </p>
            </div>
          </div>

          {/* 라마 파인 튜닝 */}
          <div className="leaf-box">
            <div className="leaf-title">'나'인공지능<br />(개인 프로젝트)</div>
            <div className="leaf-hover-content">
              <h1>파인튜닝</h1>
              <p>
                <strong className="leaf-subtitle">LLama 파인 튜닝</strong><br />
                제가 작성했던 노션을 가지고 학습을 하여 <br />
                나와 같은 인공지능을 만들어보려했습니다.<br />
                머신러닝과 파인튜닝의 학습부족으로<br />
                결과적으로 완성하지는 못한 프로젝트입니다.
                <br />
                <a href="https://myaillama.s3.ap-northeast-2.amazonaws.com/index.html" rel="noopener noreferrer" className="leaf-link small-margin">
                  바로가기
                </a><br />
                <a href="https://github.com/jojayeon/Fine_Tuning" target="_blank" rel="noopener noreferrer" className="leaf-link small-margin">
                  깃허브 바로가기
                </a>
              </p>
            </div>
          </div>
        </div>
        <CornerButton to="/stem" />
      </div>
    </Layout>
  );
}

export default Leaf;
