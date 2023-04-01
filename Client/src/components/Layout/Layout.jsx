import { useState } from 'react';
import Drawer from '../Drawer';
import Header from './Header/Header';

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Drawer  open={open} toggleDrawer={toggleDrawer}/>
      <Header toggleDrawer={toggleDrawer}/>
      <main>{children}</main>
    </>
  );
};

export default Layout;
