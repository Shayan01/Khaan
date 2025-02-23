import axios from "axios";
import { useState } from "react";
import { PRICE_URL } from "../../../helper/constants/personColomns";
import { PriceEditForm } from "../../../helper/dataTypes/person/Edit/dataTypes";
import { Button, Flex } from "antd";
import { topButtons } from "../../../helper/Styles/Person/List/style";
import Select from "../../title/select/Select";

function Edit({ price, cancleEdit, refreshPage }: PriceEditForm) {
  const [priceValues, setPriceValues] =
    useState(price);
  const [selectTitle, setSelectTitle] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState({
    id: price.titleId,
    caption: price.title,
  
  });

  const titleSelectHandler = () => setSelectTitle(true);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;

    switch (name) {
      case "title":
        setPriceValues({ ...priceValues, titleId: selectedTitle.id })
        break;
        case "price":
        setPriceValues({ ...priceValues, amount: e.target.value })
        break;
      default:
        break;
    }
  };
  const updatePrice = () => {
    let newTitleValues = {
      id: priceValues.id,
      titleId: selectedTitle.id,
      amount: priceValues.amount,
    };
    axios.put(PRICE_URL + "/" + price.id, newTitleValues).then((res) => {
      refreshPage();
    });
  };
  return selectTitle ? (
    <Select
      setSelectTitle={setSelectTitle}
      setSelectedTitle={setSelectedTitle}
    />
  ) : (
    <Flex style={topButtons} vertical gap="middle">
      <Flex gap="small">
        <label htmlFor="titleId">عنوان</label>
        <input
          type="text"
          value={selectedTitle.caption}
          name="title"
          onChange={onChangeHandler}
        />
        <input type="button" value="..." onClick={titleSelectHandler} />
      </Flex>
      <Flex gap="small">
        <label htmlFor="titleId">مبلغ</label>
        <input
          type="text"
          value={priceValues.amount}
          name="price"
          onChange={onChangeHandler}
        />
      </Flex>
      <Flex gap="small">
        <Button onClick={cancleEdit}>بازگشت</Button>
        <Button onClick={updatePrice}>تایید</Button>
      </Flex>
    </Flex>
  );
}

export default Edit;
