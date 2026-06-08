import React from 'react';

import Background from '../background';
import Nav from '../nav';
import Footer from '../footer';

const Layout = ({ children, showFooter = true }) => (
  <div className="relative min-h-screen text-gray-200 light:text-gray-800">
    <Background />
    <Nav />
    <div className="relative z-10 mx-auto max-w-screen-xl px-6 xs:px-10">
      <main>{children}</main>
      {showFooter && <Footer />}
    </div>
  </div>
);

export default Layout;
