import { useState } from "react";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import { Avatar, IconButton } from "@mui/material";
import SidebarOptions from "../../Utility/sidebar_options/SidebarOptions";
import "./SidebarHeader.css";
// import { collection, addDoc, getDocs } from "firebase/firestore"; 


const SidebarHeader = () => {
  const [showSidebarOptions, setSidebarOptions] = useState(false)
  
const handleSidebarOptions = () => {
  !showSidebarOptions ? setSidebarOptions(true) : setSidebarOptions(false)
}
  

  return (
    <div className="sidebar_header">
      <div className="sidebar_header_avatar">
        <Avatar alt="image_avatar" />
      </div>
      <div className="sidebar_header_icons">
        <IconButton>
          <DataUsageIcon />
        </IconButton>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton onClick={handleSidebarOptions} >
          <MoreHorizIcon/>
        </IconButton>

        {showSidebarOptions === true && <SidebarOptions /> }

      </div>
    </div>
  );
};

export default SidebarHeader;
