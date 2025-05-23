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
            <div className="profile-photo">사진 공간</div>
            <div className="profile-info">
              <div>이름 : </div>
              <div className="email-line">
                이메일 : <span onClick={handleCopyEmail} className="copy-email">jojayeon6152@gmail.com</span>
              </div>
              <div>스킬 : JavaScript, Python, git, AWS, MongoDB</div>
            </div>
          </div>

          {/* 소개글 */}
          <div className="intro-text">
            여기에 나를 소개하는 글 하나
          </div>

          {/* 소셜 링크 (이메일은 mailto) */}
          <div className="social-links">
            <a href="mailto:jojayeon6152@gmail.com"><img src="/메일아이콘.png" alt="Email" /></a>
            <a href="https://github.com/jojayeon"><img src="/깃허브아이콘.png" alt="GitHub" /></a>
            <a href="https://www.notion.so/1c74d9dd132680a6b8f8df9e76f20291"><img src="/노션아이콘.png" alt="Notion" /></a>
          </div>
        </div>

        <CornerButton to="/nature" />
      </div>
    </Layout>
  );
}

export default Stem;
