import { Person } from "../dataType";
export interface PersonListForm {
  persons: Array<Person>;
  loading: boolean;
  searchHandler: () => void;
  searchText: () => void;
  setLoading: () => void;
  refreshPage: () => void;
}