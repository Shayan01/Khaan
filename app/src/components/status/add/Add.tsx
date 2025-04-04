import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  STATUS_URL,
  TITLE_URL,
} from "../../../helper/constants/personColomns";
import { StatusAddForm } from "../../../helper/dataTypes/person/Add/dataTypes";
import {
  Status,
  Title,
} from "../../../helper/dataTypes/person/dataType";
import { Button, Flex } from "antd";
import { topButtons } from "../../../helper/Styles/Person/List/style";
import Select from "../../title/select/Select";

function Add({ cancleAdd, refreshPage }: StatusAddForm) {
  const [statusValues, setStatusValues] =
    useState<Status>({ id: 0, titleId: 0,title : '' });

  const [selectTitle, setSelectTitle] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState({ id: 0, caption: "" });
  
  const titleSelectHandler = () => setSelectTitle(true);
  const cancleSelectTitle = () => setSelectTitle(false);
  const AddStatus = () => {
    let newStatusValues = {
      id: statusValues.id,
      titleId: selectedTitle.id,
    };
    console.log(newStatusValues);

    axios.post(STATUS_URL, newStatusValues).then((res) => {
      refreshPage();
    });
  };
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;

    switch (name) {
      case "titleId":
        setStatusValues({
          ...statusValues,
          titleId: selectedTitle.id,
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
        <Button onClick={cancleAdd}>بازگشت</Button>
        <Button onClick={AddStatus}>تایید</Button>
      </Flex>
    </Flex>
  );
}
export default Add;
