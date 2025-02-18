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
export interface LoanType {
  id: number;
  code: number;
  date: string;
  firstInstallmentDate: string;
  lastInstallmentDate: string;
  title: string;
  titleId: number;
  personId: number;
  installmentTypeId: number;
  priceId: number;
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
export interface Pay {
  id: number;
  score: number;
  receiptId: number;
  date: string;
  installmentDate: string;
  traceNumber:number;
  priceId:number;
  loanId:number;
  personId:number;
  statusId:number;
}
