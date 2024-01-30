import React from 'react';
import { HiOutlineUserAdd } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from './../../redux/selectors';

export const NavBar = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <label
          htmlFor="my-drawer"
          className="btn btn-square btn-ghost  drawer-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="flex-1">
        <h1 className="text-center w-full">Address Book</h1>
      </div>
      <div className="flex-none">
        {isLoggedIn && (
          <button className="btn btn-square btn-ghost">
            <HiOutlineUserAdd size={20} />
          </button>
        )}
      </div>
    </div>
  );
};