export interface Person {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
}
export interface Title {
  id: number;
  caption: string;
}
export interface InstallmentType {
  id: number;
  count: number;
  titleId: number;
  title: string;
}

export interface Price {
  id: number;
  titleId: number;
  amount: string;
}
export interface Status {
  id: number;
  titleId: number;
  title: string;
}
