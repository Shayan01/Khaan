import { Person } from "../dataType";

export interface PersonEditForm {
  person: Person;
  cancleEdit: () => void;
  refreshPage: () => void;
}