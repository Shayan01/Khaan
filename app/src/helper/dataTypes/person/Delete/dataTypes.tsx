import { Person, Title, InstallmentType,Price, Status, Pay } from "../dataType";
export interface PersonDeleteForm {
  person: Person;
  cancleDelete: () => void;
  refreshPage: () => void;
}
export interface TitleDeleteForm {
  title: Title;
  cancleDelete: () => void;
  refreshPage: () => void;
}
export interface InstallmentTypeDeleteForm {
  installmentType: InstallmentType;
  cancleDelete: () => void;
  refreshPage: () => void;
}
export interface PricesDeleteForm {
  prices: Price;
  cancleDelete: () => void;
  refreshPage: () => void;
}
export interface StatusDeleteForm {
  status: Status;
  cancleDelete: () => void;
  refreshPage: () => void;
}
export interface PayDeleteForm {
  pay: Pay;
  cancleDelete: () => void;
  refreshPage: () => void;
}
