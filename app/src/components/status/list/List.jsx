import React, { useState } from "react";
import { Table, Button, Flex } from "antd";
import { InstallmentTypeColumns } from "../../../helper/constants/personColomns";
import Edit from "../edit/Edit";
import Add from "../add/Add";
import Delete from "../delete/Delete";

import "../../../App.css";
import { topButtons } from "../../../helper/Styles/Person/List/style";

function List({
  statuses,
  loading,
  searchHandler,
  searchText,
  setLoading,
  refreshPage,
  mainButtonHandler,
  titles,
}) {
  const [statusSelectedForEdit, setStatusSelectedForEdit] =
    useState(null);
  const [
    statusSelectedForDelete,
    setStatusSelectedForDelete,
  ] = useState(null);
  const [addNewStatus, setAddNewStatus] = useState(false);

  const cancleEdit = () => {
    setStatusSelectedForEdit(null);
  };
  const cancleDelete = () => {
    setStatusSelectedForDelete(null);
  };
  const cancleAdd = () => setAddNewStatus(false);

  const buttonClick = (id, name) => {
    let SelectedButtonId = id;
    const SelectedButtonName = name;
    let findStatus = statuses.find(
      (p) => p.id === SelectedButtonId
    );
 
    
    switch (SelectedButtonName) {
      case "editButton":
        setStatusSelectedForEdit(findStatus);
        break;
      case "deleteButton":
        setStatusSelectedForDelete(findStatus);
        break;
      default:
        break;
    }
  };

  statuses.forEach(
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
  return statusSelectedForEdit != null ? (
    <Edit
    status={statusSelectedForEdit}
      cancleEdit={cancleEdit}
      refreshPage={refreshPage}
    />
  ) : statusSelectedForDelete != null ? (
    <Delete
    status={statusSelectedForDelete}
      cancleDelete={cancleDelete}
      setLoading={setLoading}
      refreshPage={refreshPage}
    />
  ) : addNewStatus ? (
    <Add cancleAdd={cancleAdd} refreshPage={refreshPage} />
  ) : (
    <Flex vertical gap="middle">
      <Flex style={topButtons} gap="middle">
        <Button type="primary" onClick={refreshPage}>
          بروزرسانی
        </Button>
        <Button type="primary" onClick={() => setAddNewStatus(true)}>
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
          searchText && statuses
            ? statuses.filter(
                (p) =>
                  p.title.caption !== null &&
                  p.title.caption.includes(searchText)
              )
            : statuses
        }
        columns={InstallmentTypeColumns}
        rowKey={statuses.id}
        loading={loading}
      ></Table>
    </Flex>
  );
}

export default List;
