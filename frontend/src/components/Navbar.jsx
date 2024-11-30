import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt='Website Logo' />
      {/* Desktop Menu */}
      <ul className='hidden md:flex items-center gap-5 font-medium'>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'py-1 text-primary' : 'py-1')}>
          HOME
        </NavLink>
        <NavLink to='/doctor' className={({ isActive }) => (isActive ? 'py-1 text-primary' : 'py-1')}>
          All Doctors
        </NavLink>
        <NavLink to='/about' className={({ isActive }) => (isActive ? 'py-1 text-primary' : 'py-1')}>
          About
        </NavLink>
        <NavLink to='/content' className={({ isActive }) => (isActive ? 'py-1 text-primary' : 'py-1')}>
          Contact
        </NavLink>
      </ul>
      {/* User Profile */}
      <div className='flex items-center gap-4'>
        {token ? (
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full' src={assets.profile_pic} alt='User Profile' />
            <img className='w-2.5' src={assets.dropdown_icon} alt='Dropdown Icon' />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-50 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p onClick={() => navigate('Myprofile')} className='px-4 py-2 hover:text-black cursor-pointer'>
                  My profile
                </p>
                <p onClick={() => navigate('Myappointments')} className='px-4 py-2 hover:text-black cursor-pointer'>
                  My Appointments
                </p>
                <p onClick={() => setToken(false)} className='px-4 py-2 hover:text-black cursor-pointer'>
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button onClick={() => navigate('/Login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>
            Create Account
          </button>
        )}
        {/* Mobile Menu Toggle */}
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt='Menu Icon' />
        <div
          className={`fixed top-0 right-0 bottom-0 z-20 bg-white transform ${
            showMenu ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300`}
        >
          <div className='flex justify-between items-center p-4'>
            <img src={assets.logo} alt='Logo' className='w-32' />
            <img onClick={() => setShowMenu(false)} src={assets.cross_icon} alt='Close Menu' className='w-6 cursor-pointer' />
          </div>
          <ul className='flex flex-col items-center gap-4'>
            <NavLink   to='/' onClick={() => setShowMenu(false)}><p className="px-4 py-2 rounded inline-block">Home</p></NavLink>
            <NavLink to='/doctor' onClick={() => setShowMenu(false)}><p className="px-4 py-2 rounded inline-block">All Doctors</p></NavLink>
            <NavLink  to='/about' onClick={() => setShowMenu(false)}><p className="px-4 py-2 rounded inline-block">About</p></NavLink>
            <NavLink to='/content' onClick={() => setShowMenu(false)}><p className="px-4 py-2 rounded inline-block">Contact</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
