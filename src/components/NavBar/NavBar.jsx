import React from 'react';
import { HiOutlineUserAdd } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';

import { selectAuthIsLoggedIn } from './../../redux/selectors';
import { openDrawer } from './../../redux/app/appSlice';

export const NavBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <button
          className="btn btn-square btn-ghost"
          onClick={() => dispatch(openDrawer('user-menu-drawer'))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-7 h-7 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <h1 className="text-center w-full text-3xl">
          {isLoggedIn ? 'Contacts' : 'Address Book'}
        </h1>
      </div>
      <div className="flex-none">
        {isLoggedIn && (
          <button
            className="btn btn-square btn-ghost"
            onClick={() => dispatch(openDrawer('add-contact-drawer'))}
          >
            <HiOutlineUserAdd size={25} />
          </button>
        )}
      </div>
    </div>
  );
};
