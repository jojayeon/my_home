//첫 메인 페이지 
//자연이라는 멘트와 자연(숲)이미지를 보여줘고 다름페이지로 넘어가는 버튼만 존재하는 화면 
//넘어가는 효과는 오른쪽 아래에서 책을 넘기는것과 같이 표현
// Home.jsx
import '../styles/start.css';
import CornerButton from '../components/CornerButton'; // 버튼 컴포넌트 import

function Home() {
  return (
    <div className="home-wrapper">
      <h1>자 연</h1>
      <CornerButton to="/leaf"/>
    </div>
  );
}

export default Home;

