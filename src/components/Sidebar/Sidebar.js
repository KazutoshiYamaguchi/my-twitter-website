import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import { SidebarOption } from "./SidebarOption";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import { Button } from "@mui/material";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />
      <SidebarOption
        text="Profile"
        Icon={PermIdentityIcon}
        id="profile"
        active
      />
      <SidebarOption text="Skills" Icon={SaveAsOutlinedIcon} id="skills" />
      <SidebarOption
        text="Hobbies"
        Icon={RocketLaunchOutlinedIcon}
        id="hobbies"
      />
      <SidebarOption text="Products" Icon={ListAltIcon} id="products" />
      <SidebarOption text="Contact" Icon={MailOutlineIcon} id="contact" />

      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        tweet
      </Button>
    </div>
  );
};
