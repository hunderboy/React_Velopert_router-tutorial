import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HistorySample() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // 뒤로가기
  };

  const goHome = () => {
    navigate('/'); // 특정경로로 이동
  };

  // 컴포넌트 처음 마운트 되었을때 => useEffect 사용. 기억할것!
  useEffect(() => {
    console.log(navigate);
  }, [navigate]);

  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
    </div>
  );
}

export default HistorySample;
