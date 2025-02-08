import React, { useState } from "react";
import { Table, Button, Flex } from "antd";
import { PriceColumns } from "../../../helper/constants/personColomns";
import Edit from "../edit/Edit";
import Add from "../add/Add";
import Delete from "../delete/Delete";

import "../../../App.css";
import { topButtons } from "../../../helper/Styles/Person/List/style";

function List({
  prices,
  loading,
  searchHandler,
  searchText,
  setLoading,
  refreshPage,
  mainButtonHandler,
  titles,
}) {
  const [priceSelectedForEdit, setPriceSelectedForEdit] =
    useState(null);
  const [
    priceSelectedForDelete,
    SetPriceSelectedForDelete,
  ] = useState(null);
  const [addNewPrice, setAddNewPrice] = useState(false);

  const cancleEdit = () => {
    setPriceSelectedForEdit(null);
  };
  const cancleDelete = () => {
    priceSelectedForDelete(null);
  };
  const cancleAdd = () => setAddNewPrice(false);

  const buttonClick = (id, name) => {
    let SelectedButtonId = id;
    const SelectedButtonName = name;
    let findPrice = prices.find(
      (p) => p.id === SelectedButtonId
    );
    
    switch (SelectedButtonName) {
      case "editButton":
        setPriceSelectedForEdit(findPrice);
        break;
      case "deleteButton":
        SetPriceSelectedForDelete(findPrice);
        break;
      default:
        break;
    }
  };

  prices.forEach(
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
  return priceSelectedForEdit != null ? (
    <Edit
      installmentType={priceSelectedForEdit}
      cancleEdit={cancleEdit}
      refreshPage={refreshPage}
    />
  ) : priceSelectedForDelete != null ? (
    <Delete
      installmentType={priceSelectedForDelete}
      cancleDelete={cancleDelete}
      setLoading={setLoading}
      refreshPage={refreshPage}
    />
  ) : addNewPrice ? (
    <Add cancleAdd={cancleAdd} refreshPage={refreshPage} />
  ) : (
    <Flex vertical gap="middle">
      <Flex style={topButtons} gap="middle">
        <Button type="primary" onClick={refreshPage}>
          بروزرسانی
        </Button>
        <Button type="primary" onClick={() => setAddNewPrice(true)}>
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
          searchText && prices
            ? prices.filter(
                (p) =>
                  p.title.caption !== null &&
                  p.title.caption.includes(searchText)
              )
            : prices
        }
        columns={PriceColumns}
        rowKey={prices.id}
        loading={loading}
      ></Table>
    </Flex>
  );
}

export default List;
