export interface IAuthConstants {
  titlePage: string;
  bttnLogin: string;

  placeholderEmail: string;
  placeholderPassword: string;

  emailWarning: string;
  emailWrongFormat: string;
  passwordWarning: string;
}

export interface IFormFieldLogin {
  email?: string;
  password?: string;
}

export interface ILoginInputStyle {
  boxShadow: string;
  borderColor: string;
}

export interface ILoginButtonStyle {
  color: string;
}
