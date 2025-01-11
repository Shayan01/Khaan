export const personsColumns = [
  {
    title: "کد",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "نام",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "نام خانوادگی",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "تلفن ",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "#",
    dataIndex: "button",
    key: "button",
  },
];

export const titlesColumns = [
  {
    title: "کد",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "عنوان",
    dataIndex: "caption",
    key: "caption",
  },
  {
    title: "#",
    dataIndex: "button",
    key: "button",
  },
];
export const InstallmentTypeColumns = [
  {
    title: "کد",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "عنوان",
    dataIndex: "titleId",
    key: "titleId",
  },
  {
    title: "#",
    dataIndex: "button",
    key: "button",
  },
];

// export const BASE_URL = 'http://192.168.1.2:8040/';
export const BASE_URL = "http://localhost:5118/";
export const PERSON_URL = `${BASE_URL}Person`;
export const TITLE_URL = `${BASE_URL}Title`;
export const INSTALLMENT_TYPE_URL = `${BASE_URL}InstallmentType`;
