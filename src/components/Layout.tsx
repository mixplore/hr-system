import React from 'react';
import Sidebar from './Sidebar';
import './Layout.scss';

const Layout = ({ children }: React.PropsWithChildren) => (
  <div className="container">
    <aside>
      <Sidebar />
    </aside>
    <main>{children}</main>
  </div>
);

export default Layout;
