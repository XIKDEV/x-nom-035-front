import { FC } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { IGlobalProps } from "./IGlobalProps";

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

export interface IButtonSidebarProps extends IGlobalProps {
  onClick: () => void;
  textBttn: string;
  icon: IconDefinition;
}

export interface ISideBarProps extends IGlobalProps {
  handleSidebar: () => void;
}
