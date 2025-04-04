import React, { useEffect, useState } from "react";
import axios from "axios";
import { PRICE_URL, TITLE_URL } from "../../../helper/constants/personColomns";
import { PriceAddForm } from "../../../helper/dataTypes/person/Add/dataTypes";
import { Price, Title } from "../../../helper/dataTypes/person/dataType";
import { Button, Flex } from "antd";
import { topButtons } from "../../../helper/Styles/Person/List/style";
import Select from "../../title/select/Select";

function Add({ cancleAdd, refreshPage }: PriceAddForm) {
  const [priceValues, setPriceValues] = useState<Price>({
    id: 0,
    titleId: 0,
    title: "",
    amount: "",
  });

  const [selectTitle, setSelectTitle] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState({ id: 0, caption: "" });

  const titleSelectHandler = () => setSelectTitle(true);
  const cancleSelectTitle = () => setSelectTitle(false);
  const AddPrice = () => {
    let newPricValues = {
      amount: priceValues.amount,
      titleId: selectedTitle.id,
    };
    // console.log(newInstallmentTypeValues);

    axios.post(PRICE_URL, newPricValues).then((res) => {
      refreshPage();
    });
  };
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;
    // console.log("selectedTitle", selectedTitle);

    switch (name) {
      case "titleId":
        setPriceValues({
          ...priceValues,
          titleId: selectedTitle.id,
        });
        break;
      case "amount":
        setPriceValues({
          ...priceValues,
          amount: value,
        });
        break;
      default:
        break;
    }
  };
  return selectTitle ? (
    <Select
    cancleSelectTitle={cancleSelectTitle}
      setSelectTitle={setSelectTitle}
      setSelectedTitle={setSelectedTitle}
    />
  ) : (
    <Flex style={topButtons} vertical gap="middle">
      <Flex gap="small">
        <label htmlFor="title">عنوان</label>
        <input
          type="text"
          value={selectedTitle.caption}
          name="caption"
          onChange={onChangeHandler}
        />
        <input type="button" value="..." onClick={titleSelectHandler} />
      </Flex>
      <Flex gap="small">
        <label htmlFor="title">مبلغ</label>
        <input
          type="text"
          value={priceValues.amount}
          name="amount"
          onChange={onChangeHandler}
        />
      </Flex>

      <Flex gap="small">
        <Button onClick={cancleAdd}>بازگشت</Button>
        <Button onClick={AddPrice}>تایید</Button>
      </Flex>
    </Flex>
  );
}
export default Add;
