import React from 'react';
import Sidebar from './Sidebar';
import './Layout.scss';

const Layout = ({ children }: React.PropsWithChildren) => (
  <div className="container">
    <Sidebar />
    <main>{children}</main>
  </div>
);

export default Layout;
