import { Person, Title, InstallmentType } from "../dataType";
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
