/*
Design of the Logo Bar
 */

import Image from "next/image";
import React, { useState } from "react";
import { useAuth } from "../../authentication/AuthContext";
import { useRouter } from "next/router";
import { FaRegUserCircle } from "react-icons/fa";
import { Divider, Menu, MenuItem } from "@mui/material";
import Notification from "./Notification";

function LogoBar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  // For the account menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    //console.log(anchorEl);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //Logout function
  const handleLogout = async (e) => {
    try {
      await logout(user.email, user.password);
      router.push("/login");
    } catch (error) {
      // console.log(error);
    }
  };

  //For Notification
  const [openNotification, setOpenNotification] = useState(false);

  // dynamic logobar --> so when people login, the user icon appears on the right
  // ofc this is for now

  return (
    <div className="w-full bg-transparent">
      {user ? (
        <div className="flex w-full justify-between">
          {/* Robogal Logo */}
          <div className="w-full">
            <Image
              src="/logo.png"
              alt="Logo"
              width={200}
              height={200}
              className="w-4/12 md:w-3/12 lg:w-1/6 hover:cursor-pointer"
              onClick={() => {
                router.push("/");
              }}
            />
          </div>

          {/* User Icon */}
          <div className="self-center">
            <FaRegUserCircle
              className="hover:cursor-pointer"
              size={50}
              onClick={handleClick}
            />
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={200}
            height={200}
            className="w-4/12 md:w-3/12 lg:w-1/6"
          />
        </div>
      )}
      {/* The MENU --> Maybe i can make it into a account menu*/}
      {anchorEl && (
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
        >
          <MenuItem className="hover:cursor-default">
            <FaRegUserCircle size={30} />
            {user.email}
          </MenuItem>
          <Divider />
          <MenuItem
            onClick={() => {
              handleClose();
              router.push("/user");
            }}
          >
            Profile
          </MenuItem>
          {/* <MenuItem
            onClick={() => {
              handleClose();
              setOpenNotification(true);
            }}
          >
            Notifications
          </MenuItem> */}
          <MenuItem
            onClick={() => {
              handleClose();
              handleLogout();
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      )}
      <Notification
        openNotification={openNotification}
        setOpenNotification={setOpenNotification}
      />
    </div>
  );
}

export default LogoBar;
