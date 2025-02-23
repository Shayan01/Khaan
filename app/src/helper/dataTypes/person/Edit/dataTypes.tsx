import { Person,Title, InstallmentType, Price, Status, Pay, LoanType} from "../dataType";

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
export interface PriceEditForm {
   price: Price;
  cancleEdit: () => void;
  refreshPage: () => void;
}
export interface StatusEditForm {
  status: Status;
  cancleEdit: () => void;
  refreshPage: () => void;
}
export interface PayEditForm {
  pay: Pay;
  cancleEdit: () => void;
  refreshPage: () => void;
}
export interface LoanEditForm {
  loan: LoanType;
  cancleEdit: () => void;
  refreshPage: () => void;
}