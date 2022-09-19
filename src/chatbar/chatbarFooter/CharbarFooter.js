import React from "react";
import { IconButton } from "@mui/material";
import MicIcon from '@mui/icons-material/Mic';
import MoodIcon from '@mui/icons-material/Mood';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import "./ChatbarFooter.css";

const CharbarFooter = () => {
  return (
    <div className="chatbar_footer">
      <IconButton>
        <MoodIcon />
      </IconButton>
      <IconButton>
        <AttachFileIcon />
      </IconButton>
      <input type="text" placeholder="Type a message" />
      <IconButton>
        <MicIcon />
      </IconButton>
    </div>
  );
};

export default CharbarFooter;
