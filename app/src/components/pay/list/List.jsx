import React, { useState } from "react";
import { Table, Button, Flex } from "antd";
import { InstallmentTypeColumns } from "../../../helper/constants/personColomns";
import Edit from "../edit/Edit";
import Add from "../add/Add";
import Delete from "../delete/Delete";

import "../../../App.css";
import { topButtons } from "../../../helper/Styles/Person/List/style";

function List({
  pays,
  loading,
  searchHandler,
  searchText,
  setLoading,
  refreshPage,
  mainButtonHandler,
  prices,
}) {
  const [paySelectedForEdit, setPaySelectedForEdit] =
    useState(null);
  const [
    paySelectedForDelete,
    SetPaySelectedForDelete,
  ] = useState(null);
  const [addNewPay, setAddNewPay] = useState(false);
  const cancleEdit = () => {
    setPaySelectedForEdit(null);
  };
  const cancleDelete = () => {
    paySelectedForDelete(null);
  };
  const cancleAdd = () => setAddNewPay(false);

  const buttonClick = (id, name) => {
    let SelectedButtonId = id;
    const SelectedButtonName = name;
    let findPay = pays.find(
      (p) => p.id === SelectedButtonId
    );
    switch (SelectedButtonName) {
      case "editButton":
        setPaySelectedForEdit(findPay);
        break;
      case "deleteButton":
        SetPaySelectedForDelete(findPay);
        break;
      default:
        break;
    }
  };

  pays.forEach(
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
      (p.prices = prices.find((t) => t.id === p.titleId).caption)
    )
  );
  return paySelectedForEdit != null ? (
    <Edit
      pay={paySelectedForEdit}
      cancleEdit={cancleEdit}
      refreshPage={refreshPage}
    />
  ) : paySelectedForDelete != null ? (
    <Delete
      installmentType={paySelectedForDelete}
      cancleDelete={cancleDelete}
      setLoading={setLoading}
      refreshPage={refreshPage}
    />
  ) : addNewPay ? (
    <Add cancleAdd={cancleAdd} refreshPage={refreshPage} />
  ) : (
    <Flex vertical gap="middle">
      <Flex style={topButtons} gap="middle">
        <Button type="primary" onClick={refreshPage}>
          بروزرسانی
        </Button>
        <Button type="primary" onClick={() => setAddNewPay(true)}>
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
          searchText && pays
            ? pays.filter(
                (p) =>
                  p.title.caption !== null &&
                  p.title.caption.includes(searchText)
              )
            : pays
        }
        columns={InstallmentTypeColumns}
        rowKey={pays.id}
        loading={loading}
      ></Table>
    </Flex>
  );
}

export default List;
