import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from './Utils/appSlice';

const Header = () => {
    const dispatch=useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }



  return (
  <div className="grid h-3 grid-flow-col p-5 pt-3 m-2">
    <div className="flex justify-around col-span-1">
      <img
        onClick={() => toggleMenuHandler()}
        className="cursor-pointer h-7"
        src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
        alt="Menu icon"
      />
    </div>

    <div className="h-3 pt-3 object-contain">
      <a href="/">
        <img
          className="h-14"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnEXQdAa-3ljX26kSoD1zDIGZnVP6Wyy4wJg&s"
          alt="Website logo"
        />
      </a>
    </div>

    <div className="col-span-10">
      <input type="text" />
      <button>Search</button>
    </div>

    <div className="col-span-1 p-5 m-2">
      <img
        className="h-10"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-Gh6uC11b9BUzfJ1OAuC3MgwwQdOLZL7PA&s"
        alt="User profile"
      />
    </div>
  </div>
);
}
