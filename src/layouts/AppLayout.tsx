import React from 'react';
import Header from '../components/Header';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="appLayout">
      <Header />
      {children}
    </div>
  );
};

export default AppLayout;
