import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // 쿼리 문자열에서 detail 파라미터 가져오기
  const detail = searchParams.get('detail') === 'true';

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트랍니다.</p>
      {detail && <p>추가적인 정보가 어쩌고 저쩌고..</p>}
    </div>
  );
};

export default About;
