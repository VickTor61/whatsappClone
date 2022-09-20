import Icon from "../Utility/Icon";
import Avatar from "@mui/material/Avatar";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_avatar">
        <Avatar
          alt="image_avatar"
          src="data:image/jpeg;base64,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"
        />
      </div>
      <div className="header_icons">
        <Icon />
      </div>
    </div>
  );
};

export default Header;