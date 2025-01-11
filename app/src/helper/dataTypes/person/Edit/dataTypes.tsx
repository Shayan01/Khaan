import { Person,Title, InstallmentType} from "../dataType";

export interface PersonEditForm {
  person: Person;
  cancleEdit: () => void;
  refreshPage: () => void;
}
export interface TitleEditForm {
  title: Title;
  cancleEdit: () => void;
  refreshPage: () => void;
}
export interface InstallmentTypeEditForm {
  installmentType: InstallmentType;
  cancleEdit: () => void;
  refreshPage: () => void;
}