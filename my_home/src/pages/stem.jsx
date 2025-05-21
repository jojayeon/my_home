//자기소개하는 페이지
//내 기본적인 스펙과 이야기를 적을 것
import Layout from '../components/Layout';
import '../styles/stem.css'; // ✨ 새로운 CSS 파일 추가 예정
import CornerButton from '../components/CornerButton';

function Stem() {

  return (
    <Layout>
      <div className="stem-container">
        <div className="intro-box">
          <div>
            사진 공간 
          </div>
          <div>이름 : xxx</div>
          <div>스킬 : xxx</div>
          <br />
          <div>
            여기에 나를 소개하는 글 하나 
          </div>
          <br />
          <p> 여기는 이모키콘으로 해서 연결하기</p>
          <div>jojayeon6152@gmail.com</div>
          <div>git.hub</div>
          <div>노션</div>
          <div>인스타</div>
        </div>
          <CornerButton to="/nature" />
      </div>
    </Layout>
  );
}

export default Stem;
