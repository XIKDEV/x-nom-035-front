import { FC } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface ILayoutConstants {
  enterprises: string;
  users: string;
  logout: string;
}

export interface ILayoutMainPageProps {
  page: FC<ILayoutHandleSidebar>;
}

export type ILayoutHandleSidebar = {
  handleSidebar: () => void;
};

export interface IButtonSidebarProps {
  onClick: () => void;
  textBttn: string;
  icon: IconDefinition;
  isCollapse: boolean;
}

export interface ISideBarProps {
  isMobile: boolean;
  isCollapse: boolean;
  handleSidebar: () => void;
}
