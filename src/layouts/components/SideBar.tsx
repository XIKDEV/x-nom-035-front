import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBuilding } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowLeft,
  faArrowRight,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { ButtonSidebar } from ".";
import { ISideBarProps } from "../../interfaces";
import { layoutConstants } from "../../constants";

export const SideBar: FC<ISideBarProps> = ({
  isMobile,
  isCollapse,
  handleSidebar,
}) => {
  const handleLogout = () => {
    console.log("logout");
  };
  return (
    <div className="sider-content flex-column-center space-between">
      {isMobile ? (
        <></>
      ) : (
        <button
          className="sidebar-open-close"
          onClick={handleSidebar}
          style={{ right: isCollapse ? "" : "0px" }}
          data-testid="sidebar-open-close"
        >
          <FontAwesomeIcon
            icon={isCollapse ? faArrowRight : faArrowLeft}
            style={{ transition: "all 0.2s ease-in-out" }}
          />
        </button>
      )}

      <img
        className={`sidebar-logo ${
          isCollapse ? "logo-collapse" : "logo-expand"
        }`}
        src="../../../public/XIK_VerdeTransparente.png"
        alt="XikDev"
        data-testid="sidebar-logo"
      />

      <section
        className="sider-navigation flex-column-center"
        data-testid="sider-navigation"
      >
        <ButtonSidebar
          onClick={
            isMobile
              ? handleSidebar
              : () => {
                  console.log("user page");
                }
          }
          textBttn={layoutConstants.users}
          icon={faUser}
          isCollapse={isCollapse}
        />
        <ButtonSidebar
          onClick={
            isMobile
              ? handleSidebar
              : () => {
                  console.log("enterprise page");
                }
          }
          textBttn={layoutConstants.enterprises}
          icon={faBuilding}
          isCollapse={isCollapse}
        />
      </section>

      <section
        className="sider-logout flex-column-center"
        data-testid="sider-logout"
      >
        <ButtonSidebar
          onClick={handleLogout}
          textBttn={layoutConstants.logout}
          icon={faPowerOff}
          isCollapse={isCollapse}
        />
      </section>
    </div>
  );
};
