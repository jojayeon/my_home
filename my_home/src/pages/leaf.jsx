import Layout from '../components/Layout';
import CornerButton from '../components/CornerButton';
import ProjectBox from '../components/ProjectBox';
import '../styles/leaf.css';

function Leaf() {
  const projects = [
    {
      title: "fps연습\n(개인 프로젝트)",
      subtitle: '에임 연습',
      description: [
        '오버워치라는 게임을 즐기면서 너무 빠지는 것을 방지하고',
        '실력은 좋아졌으면 하는 마음에 만든 프로젝트입니다.',
      ],
      image: '/images/aim.jpg',
      links: [
        {
          label: '바로가기',
          href: 'https://aim-practice-3-d.vercel.app/',
        },
        {
          label: '깃허브 바로가기',
          href: 'https://github.com/jojayeon/Aim_Practice',
        },
        {
          label: '노션 바로가기',
          href: 'https://www.notion.so/1f14d9dd1326800e9505e8a9cf6ff65e',
        },
      ],
    },
    {
      title: '대전 맛집 지도\n(개인 프로젝트)',
      subtitle: '대전 맛집',
      description: [
        '데이터 분석을 중점으로 두고 진행한 프로젝트입니다.',
        '블루리본과 카카오맵 평점, 리뷰 분석까지',
        '총 3가지를 중점으로 판단한 맛집 지도.',
      ],
      image: '/images/map.jpg',
      links: [
        {
          label: '바로가기',
          href: 'https://py-really-delicious-restaurant-fs28ehrn1-jojayeons-projects.vercel.app/',
        },
        {
          label: '깃허브 바로가기',
          href: 'https://github.com/jojayeon/py-Really_delicious_restaurant',
        },
      ],
    },
    {
      title: `RockCoders\n(팀 프로젝트)`,
      subtitle: 'ERP 프로그램',
      description: [
        '햄버거가게 키오스크를 제작하였습니다.',
        '서버, 데이터베이스, 프론트, 백 서버를 따로 제작하였습니다.',
        '배포하지 않았습니다.',
      ],
      image: '/images/rock.jpg',
      links: [
        {
          label: 'ppt 보기',
          href: 'https://docs.google.com/presentation/d/1Jsdp6TBzEXzpmEvt4ZjG81KOUTWrJ_SI/edit?usp=sharing&ouid=110668444643597630550&rtpof=true&sd=true',
          download: true,
        },
        {
          label: '깃허브 바로가기',
          href: 'https://github.com/KDT-IaaS-Class-Two-Group/RockCoders',
        },
      ],
    },
    {
      title: '호랑이 팀\n(팀 프로젝트)',
      subtitle: '머신러닝을 이용한 학습',
      description: [
        '머신러닝으로 UFC선수들의 데이터를 이용하여 학습을하고',
        '사람들의 전투력을 전투력을 측정하는 머신러닝 모델.',
        '측정한 모델로 하는 생존 게임',
      ],
      image: '/images/team2.jpg',
      links: [
        {
          label: 'ppt 보기',
          href: 'https://drive.google.com/file/d/169KFih1yHgZAl6hqTGO4Kmfigx3fwzl1/view?usp=sharing',
          download: true,
        },
        {
          label: '깃허브 바로가기',
          href: 'https://github.com/KDT-IaaS-Class-Two-Group/KDT-IaaS-2-ProjectB-2team',
        },
      ],
    },
    {
      title: "'청소 방법'인공지능\n(개인 프로젝트)",
      subtitle: 'LLama 파인 튜닝',
      description: [
        '청소에 관심이 많아, 이미 알고 있는 내용도 정확하게',
        '다시 확인하고 싶을 때 빠르게 도움을 받을 수 있는',
        '청소법을 알려주는 AI를 개발하는 것이 목표입니다.'
      ],
      image: '/images/llama.jpg',
      links: [
        {
          label: '진행 중',
          href: '',
        },
        {
          label: '깃허브 바로가기',
          href: 'https://github.com/jojayeon/llama_Fine_Tuning',
        },
      ],
    },
  ];

  return (
    <Layout>
      <div className="leaf-container">
        <div className="leaf-grid">
          {projects.map((project, idx) => (
            <ProjectBox key={idx} {...project} />
          ))}
        </div>
        <CornerButton to="/stem" />
      </div>
    </Layout>
  );
}

export default Leaf;
