import { IGlobalStyle } from "../../interfaces";

export const cardMobileBodyStyles: IGlobalStyle = {
  padding: 0,
  height: "100%",
  display: "flex",
  alignItems: "center",
};

export const cardMetaStyle: IGlobalStyle = {
  title: {
    fontSize: "var(--text)",
  },
  titleMobile: {
    fontSize: "var(--text-small)",
  },
  description: {
    fontSize: "var(--subtext)",
  },
  descriptionMobile: {
    fontSize: "var(--subtext-small)",
  },
};

export const formsDrawerStyles: IGlobalStyle = {
  background: "var(--gray)",
};

export const headerFormsDrawerStyles: IGlobalStyle = {
  border: "none",
};

export const inputFormsStyle: IGlobalStyle = {
  boxShadow: "none",
  borderColor: "var(--primary)",
  width: "100%",
};

export const formsButtonsStyles: IGlobalStyle = {
  color: "var(--gray)",
};
