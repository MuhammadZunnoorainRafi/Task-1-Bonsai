import { Dropdown } from 'flowbite-react';
import React, { useState } from 'react';

function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className=" max-w-5xl mb-20 mx-auto px-2">
      <div className="flex py-2 md:py-5 items-center justify-between relative ">
        <h1 className="font-bold text-primary text-2xl">bonsai</h1>

        <div className="hidden ml-12 md:flex items-center relative z-10 justify-center space-x-6">
          <Dropdown label="Products" inline={true}>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Dropdown label="Pricings" inline={true}>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <a href="#faq" className=" text-base ">
            FAQ
          </a>
          <a href="#footer" className=" text-base ">
            Footer
          </a>
        </div>
        <div className="hidden md:flex space-x-2 items-center justify-center">
          <div className="flex items-center space-x-1">
            <span>{darkMode ? 'Dark' : 'Light'}</span>
            <input
              type="checkbox"
              onClick={() => setDarkMode((prevValue) => !prevValue)}
              className="toggle bg-primary"
            />
          </div>
          <button className="px-5 py-1 rounded-sm text-primary border border-primary hover:bg-primary hover:text-white duration-150">
            LOG IN
          </button>
          <button className="px-5 py-1 rounded-sm hover:text-primary border border-primary bg-primary hover:bg-white text-white duration-150">
            START FREE
          </button>
        </div>

        {/* HAMBURGER MENU */}
        <label className=" md:hidden z-50 btn btn-circle swap swap-rotate">
          <input type="checkbox" onClick={() => setOpen(!open)} />

          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
      {/* Mobile Menu */}
      <div className=" flex md:hidden">
        <div
          className={` ${
            open ? 'flex' : 'hidden'
          } absolute top-0 right-0 bottom-0  w-60 bg-black text-slate-100 space-y-4 py-24 px-6  flex-col `}
        >
          <Dropdown label="Products" inline={true}>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Dropdown label="Pricings" inline={true}>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <a href="#faq" className=" text-base ">
            FAQ
          </a>
          <a href="#footer" className=" text-base ">
            Footer
          </a>
          <div>
            <div className="flex space-x-2 items-center ">
              <button className="px-3 py-1 text-sm rounded-sm text-primary border border-primary hover:bg-primary hover:text-white duration-150">
                LOG IN
              </button>
              <button className="px-3 py-1 text-sm rounded-sm hover:text-primary border border-primary bg-primary hover:bg-white text-white duration-150">
                START FREE
              </button>
            </div>
            <div className="flex mt-2 items-center space-x-1">
              <span>{darkMode ? 'Dark' : 'Light'}</span>
              <input
                type="checkbox"
                onClick={() => setDarkMode((prevValue) => !prevValue)}
                className="toggle bg-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
