import React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';

const WithRouterSample = () => {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h4>location</h4>
      <textarea value={JSON.stringify(location, null, 2)} readOnly />
      <h4>params</h4>
      <textarea value={JSON.stringify(params, null, 2)} readOnly />
      <button onClick={() => navigate('/')}>홈으로</button>
    </div>
  );
};

export default WithRouterSample;
