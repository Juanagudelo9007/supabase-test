import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar';
import { AuthLogin } from '../context/UserAuth';
import Modal from './Modal';
import { useContext } from 'react';


const Layout = () => {
const {openModal} = useContext(AuthLogin);

  return (
    <div>
      <Navbar />
      <Outlet />
      {/* Modal */}

      {openModal && <Modal />}
    </div>
  );
}

export default Layout
