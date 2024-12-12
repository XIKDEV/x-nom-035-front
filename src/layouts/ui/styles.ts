import { IGlobalStyle } from "../../interfaces";

export const layoutStyle: IGlobalStyle = {
  maxHeight: "100vh",
};

export const drawerStyles: IGlobalStyle = {
  placement: "left",
  width: "min(50%, 176px)",
  bodyStyle: {
    backgroundColor: "var(--dark)",
  },
};

export const siderStyles: IGlobalStyle = {
  position: "relative",
  height: "100vh",
  overflow: "auto",
  left: 0,
  top: 0,
  bottom: 0,
  backgroundColor: "var(--dark)",
};
