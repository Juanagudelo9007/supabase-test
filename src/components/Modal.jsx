import React from 'react';
import { Link } from 'react-router';

const Modal = () => {
  return (
    <div className='w-40 h-36 bg-white flex flex-col'>
     <div className='h-full  w-full'>
         <Link>Profile</Link>
         <Link>Support</Link>
         <Link>Settings</Link>
         <button>Log Out</button>
     </div>
       
    </div>
  )
}

export default Modal
