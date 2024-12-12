import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IButtonSidebarProps } from "../../interfaces";

export const ButtonSidebar: FC<IButtonSidebarProps> = ({
  onClick,
  icon,
  textBttn,
  isCollapse,
}) => {
  return (
    <button
      onClick={onClick}
      className="button-sidebar flex-row-center"
      data-testid="button-sidebar"
    >
      <FontAwesomeIcon
        icon={icon}
        style={{ marginRight: isCollapse ? "0px" : "10px" }}
        data-testid="fa-icon"
      />
      {isCollapse ? "" : `${textBttn}`}
    </button>
  );
};
