// import * as React from "react";
import React, { useState } from "react";
import { Avatar, Menu, MenuItem } from "@mui/material";
import logo from "../assets/logo.svg";
import Button from "@restart/ui/esm/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Search from "./Movies/Search";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <nav className="navbar ">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            <img src={logo} />
          </span>
          <Search
            printValue={props.print}
            searchValue={props.searchValue}
            setsearchValue={props.setsearchValue}
          />
          <div className=" dropDown card">
            <div className="card-body">
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                className="avatar"
                style={{ float: "left", marginRight: "20px" }}
              />
              <span>{props.data}</span>
              <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className="arrow"
              >
                <KeyboardArrowDownIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Link className="logout" to="/login">
                    LogOut
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
