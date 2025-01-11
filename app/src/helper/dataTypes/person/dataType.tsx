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
}