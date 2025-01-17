import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  INSTALLMENT_TYPE_URL,
  TITLE_URL,
} from "../../../helper/constants/personColomns";
import { InstallmentTypeAddForm } from "../../../helper/dataTypes/person/Add/dataTypes";
import {
  InstallmentType,
  Title,
} from "../../../helper/dataTypes/person/dataType";
import { Button, Flex } from "antd";
import { topButtons } from "../../../helper/Styles/Person/List/style";
import List from "../list/List";
import Select from "../../title/select/Select";

function Add({ cancleAdd, refreshPage }: InstallmentTypeAddForm) {
  const initTitle = { id: 0, caption: "" };
  const [installmentTypeValues, setInstallmentTypeValues] =
    useState<InstallmentType>({ id: 0, count: 0, title: initTitle });

  const [selectTitle, setSelectTitle] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState({ id: 0, caption: "" });

  const titleSelectHandler = () => setSelectTitle(true);
  const AddInstallmentType = () => {
    let newInstallmentTypeValues = {
      id: installmentTypeValues.id,
      count: installmentTypeValues.count,
      titleId: installmentTypeValues.title.id,
      createdAt:
    };

    axios.post(INSTALLMENT_TYPE_URL, newInstallmentTypeValues).then((res) => {
      refreshPage();
    });
  };
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;


    switch (name) {
      case "titleId":
        setInstallmentTypeValues({
          ...installmentTypeValues,
          title: selectedTitle,
        });
        break;
      case "count":
        setInstallmentTypeValues({
          ...installmentTypeValues,
          count: parseInt(value),
        });
        break;
      default:
        break;
    }
  };
  return selectTitle ? (
    <Select
      titleSelectHandler={titleSelectHandler}
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
        <label htmlFor="title">تعداد اقساط</label>
        <input
          type="number"
          value={installmentTypeValues.count}
          name="count"
          onChange={onChangeHandler}
        />
      </Flex>

      <Flex gap="small">
        <Button onClick={cancleAdd}>بازگشت</Button>
        <Button onClick={AddInstallmentType}>تایید</Button>
      </Flex>
    </Flex>
  );
}
export default Add;
