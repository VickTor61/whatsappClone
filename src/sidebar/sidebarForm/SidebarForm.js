import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import "./SidebarForm.css";

const SidebarForm = () => {
  return (
    <div className="sidebar_form">
      <div className="sidebar_form_field">
        <SearchIcon />
        <input type="text" placeholder="Search or start new chat" />
      </div>
      <IconButton>
        <FilterListIcon />
      </IconButton>
    </div>
  );
};

export default SidebarForm;
