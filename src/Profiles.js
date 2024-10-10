import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';

const Profiles = () => {
  return (
    <div>
      <h3>유저 목록:</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/velopert"
            style={({ isActive }) =>
              isActive ? { background: 'black', color: 'white' } : undefined
            }
          >
            velopert
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/gildong"
            style={({ isActive }) =>
              isActive ? { background: 'black', color: 'white' } : undefined
            }
          >
            gildong
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route index element={<div>유저를 선택해주세요.</div>} />
        <Route path=":username" element={<Profile />} />
      </Routes>
      <WithRouterSample />
    </div>
  );
};

export default Profiles;
