//자기소개하는 페이지
//내 기본적인 스펙과 이야기를 적을 것
import React from 'react';
import Layout from '../components/Layout';
import '../styles/stem.css';
import CornerButton from '../components/CornerButton';

function Stem() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jojayeon6152@gmail.com")
      .then(() => {
        alert("이메일이 복사되었습니다!");
      })
      .catch((err) => {
        console.error("복사 실패:", err);
      });
  };

  return (
    <Layout>
      <div className="stem-container">
        <div className="intro-box">
          {/* 상단: 사진 + 이름/스킬/이메일 */}
          <div className="top-section">
            <div className="profile-photo"></div>
            <div className="profile-info">
              <div>이름 : 다음 페이지를 봐주세요.</div>
              <div className="email-line">
                이메일 : <span onClick={handleCopyEmail} className="copy-email">jojayeon6152@gmail.com</span>
              </div>
              <div>스킬 : JavaScript, Python, git, AWS, MongoDB</div>
              <div>취미 : 게임, 산책, 청소</div>
            </div>
          </div>

          {/* 소개글 */}
          <div className="intro-text">
            빅데이터 분석에서 시작된 개발에 대한 흥미를 바탕으로 풀스택 개발 역량을 키워온 예비 개발자입니다. 
            <br/>
            ERP 시스템과 맛집 분석 프로젝트를 통해 데이터와 기능을 연결하고, 
            <br/>
            팀원들과의 협업을 통해 문제를 해결하는 과정에서 개발의 매력을 깊이 체감했습니다.
            <br/>
            사람의 이야기에 귀 기울이는 성격과 체계적인 문제 해결력을 바탕으로, 함께 성장할 수 있는 개발자가 되고자 합니다.
          </div>

          {/* 소셜 링크 (이메일은 mailto) */}
          <div className="social-links">
            <div>
              <a href="mailto:jojayeon6152@gmail.com"><img src="/images/git.jpg" alt="Email" /></a>
            </div>
            <a href="https://github.com/jojayeon"><img src="/images/mail.jpg" alt="GitHub" /></a>
            <a href="https://www.notion.so/1c74d9dd132680a6b8f8df9e76f20291"><img src="/images/notion.jpg" alt="Notion" /></a>
          </div>
        </div>

        <CornerButton to="/nature" />
      </div>
    </Layout>
  );
}

export default Stem;
