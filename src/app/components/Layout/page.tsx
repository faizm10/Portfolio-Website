// src/app/components/Layout/page.tsx
import React, {ReactNode} from 'react';
import Navbar from '../NavBar/page';
import Footer from '../Footer/page';
interface LayoutProps {
    children: ReactNode; // This allows any valid React child (including null, string, JSX elements, etc.)
  }
  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  );
};

export default Layout;
