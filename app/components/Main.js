import React from 'react';

import Nav from './Nav';

const Main = ({children}) => {
  return (
    <div>
      <Nav />
      <div>
        <div>
          <p>Main.jsx</p>
          {children}  {/* Comes from React Router */ }
        </div>
      </div>
    </div>
  );
}

export default Main;
