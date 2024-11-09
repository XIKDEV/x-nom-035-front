export interface IUiConstants {
  inputQuickSearchPlaceholder: string;
}

export interface IInputFormsStyle {
  boxShadow: string;
  borderColor: string;
  width: string;
}

export interface IFormsButtonsStyles {
  color: string;
}

export interface IFormItemInputProps {
  name: NameType;
  rules?: IRules[];
  placeholder: string;
  classname?: string;
}

export interface IFormItemSelectProps {
  name: NameType;
  rules?: IRules[];
  placeholder: string;
  options: IOptions[];
}

export interface IRules {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pattern?: any;
  max?: number;
  type?: RulesType;
  message: string;
}

export type RulesType = "string" | "number" | "boolean" | "url" | "email";

export interface IOptions {
  value: string | number;
  label: string;
}

export type NameType = "email" | "password";
// *tipos proximos a utilar no borrar.
// | "name"
// | "lastname"
// | "email"
// | "idRole"
// | "business_name"
// | "comercial_name"
// | "legal_representative"
// | "RFC"
// | "street"
// | "exterior_number"
// | "interior_number"
// | "suburb"
// | "postal_code"
// | "id_state"
// | "id_city"
// | "country"
// | "enterprise_type"
// | "turn_enterprise"
// | "tellphone"
// | "email"
// | "file";
