import React from 'react';
import './style.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from "@material-ui/core";

function SidebarOption({ active, text, Icon }) {
    return (
        <div className={`sidebarOption ${active&& 'sidebarOption--active'}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    );
}
function LeftSidebar() {
  return (
     <div className="MessageList mb-5">
      {/* Twitter icon */}
            <TwitterIcon className="sidebar_twitterIcon"/>
            {/* SidebarOption */}
            <SidebarOption active Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
            <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
            <SidebarOption Icon={ListAltIcon} text="Lists"/>
            <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
            <SidebarOption Icon={MoreHorizIcon} text="More"/>

            {/* Button -> Tweet */}
            <Button variant="outlined" className="sidebar_tweet" fullWidth>Tweet</Button>
            
        </div>
    );
}


export default LeftSidebar;
