import React, { useState } from "react";
import { Table, Button, Flex } from "antd";
import { InstallmentTypeColumns } from "../../../helper/constants/personColomns";
import Edit from "../edit/Edit";
import Add from "../add/Add";
import Delete from "../delete/Delete";

import "../../../App.css";
import { topButtons } from "../../../helper/Styles/Person/List/style";

function List({
  loans,
  loading,
  searchHandler,
  searchText,
  setLoading,
  refreshPage,
  mainButtonHandler,
  titles,
}) {
  const [loanSelectedForEdit, setLoanSelectedForEdit] =
    useState(null);
  const [
    loanSelectedForDelete,
    SetLoanSelectedForDelete,
  ] = useState(null);
  const [addNewLoan, setAddNewLoan] = useState(false);


  const cancleEdit = () => {
    setLoanSelectedForEdit(null);
  };
  const cancleDelete = () => {
    loanSelectedForDelete(null);
  };
  const cancleAdd = () => setAddNewLoan(false);

  const buttonClick = (id, name) => {
    let SelectedButtonId = id;
    const SelectedButtonName = name;
    let findLoan = loans.find(
      (p) => p.id === SelectedButtonId
    );
    switch (SelectedButtonName) {
      case "editButton":
        setLoanSelectedForEdit(findLoan);
        break;
      case "deleteButton":
        SetLoanSelectedForDelete(findLoan);
        break;
      default:
        break;
    }
  };

  loans.forEach(
    (p) => (
      (p.key = p.id),
      (p.button = (
        <Flex gap="small">
          <Button
            type="primary"
            name="editButton"
            color="default"
            variant="solid"
            id={p.id}
            onClick={() => buttonClick(p.id, "editButton")}
          >
            ویرایش
          </Button>
          <Button
            type="primary"
            color="danger"
            variant="solid"
            name="deleteButton"
            id={p.id}
            onClick={() => buttonClick(p.id, "deleteButton")}
          >
            حذف
          </Button>
        </Flex>
      )),
      (p.title = titles.find((t) => t.id === p.titleId).caption)
    )
  );
  return loanSelectedForEdit != null ? (
    <Edit
      installmentType={loanSelectedForEdit}
      cancleEdit={cancleEdit}
      refreshPage={refreshPage}
    />
  ) : loanSelectedForDelete != null ? (
    <Delete
      installmentType={loanSelectedForDelete}
      cancleDelete={cancleDelete}
      setLoading={setLoading}
      refreshPage={refreshPage}
    />
  ) : addNewLoan ? (
    <Add cancleAdd={cancleAdd} refreshPage={refreshPage} />
  ) : (
    <Flex vertical gap="middle">
      <Flex style={topButtons} gap="middle">
        <Button type="primary" onClick={refreshPage}>
          بروزرسانی
        </Button>
        <Button type="primary" onClick={() => setAddNewLoan(true)}>
          افزودن
        </Button>
        <Button type="primary" onClick={() => mainButtonHandler("")}>
          بازگشت
        </Button>
      </Flex>
      <Flex style={topButtons} wrap>
        <input type="search" onChange={searchHandler} value={searchText} />
      </Flex>
      <Table
        dataSource={
          searchText && loans
            ? loans.filter(
                (p) =>
                  p.title.caption !== null &&
                  p.title.caption.includes(searchText)
              )
            : loans
        }
        columns={InstallmentTypeColumns}
        rowKey={loans.id}
        loading={loading}
      ></Table>
    </Flex>
  );
}

export default List;
