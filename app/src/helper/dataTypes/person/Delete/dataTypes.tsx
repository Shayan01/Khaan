import { Person } from "../dataType";
export interface PersonDeleteForm {
  person: Person;
  cancleDelete: () => void;
  refreshPage: () => void;
}