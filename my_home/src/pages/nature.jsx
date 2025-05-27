//마지막 마무리 페이지
//숲나무 사람이 같이 있는 이미지를 보여주고 글로 조자연이라는 것을 말해주면서 마무리 
//처음으로 돌아가는 버튼 
import '../styles/nature.css'; // ✨ 새 CSS 파일 추가 예정
import CornerButton from '../components/CornerButton';

function Nature() {

  return (
    <div className="nature-container">
      <h1>제 이름은 조자연입니다.</h1>
      <h1>"자연"이라는 단어를 보고 이제는 저를 봐주세요.</h1>
        <CornerButton to="/"/>
    </div>
  );
}

export default Nature;