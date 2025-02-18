import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LOAN_URL,
  TITLE_URL,
} from "../../../helper/constants/personColomns";
import { LoanAddForm } from "../../../helper/dataTypes/person/Add/dataTypes";
import { LoanType, Title } from "../../../helper/dataTypes/person/dataType";
import { Button, Flex } from "antd";
import { topButtons } from "../../../helper/Styles/Person/List/style";
import Select from "../../title/select/Select";

function Add({ cancleAdd, refreshPage }: LoanAddForm) {
  const [loanValues, setLoanValues] = useState<LoanType>({
    id: 0,
    code: 0,
    title:"",
    titleId: 0,
    personId: 0,
    installmentTypeId: 0,
    priceId: 0,
    date: "",
    firstInstallmentDate: "",
    lastInstallmentDate: "",
  });

  const [selectTitle, setSelectTitle] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState({ id: 0, caption: "" });

  const titleSelectHandler = () => setSelectTitle(true);
  const AddLoan = () => {
    let newLoanValues = {
      code: loanValues.code,
      titleId: selectedTitle.id,
    };
    axios.post(LOAN_URL, newLoanValues).then((res) => {
      refreshPage();
    });
  };
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;

    switch (name) {
      case "titleId":
        setLoanValues({
          ...loanValues,
          titleId: selectedTitle.id,
        });
        break;
      case "code":
        setLoanValues({
          ...loanValues,
          code: parseInt(value),
        });
        break;
      default:
        break;
    }
  };
  return selectTitle ? (
    <Select
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
          value={loanValues.code}
          name="code"
          onChange={onChangeHandler}
        />
      </Flex>

      <Flex gap="small">
        <Button onClick={cancleAdd}>بازگشت</Button>
        <Button onClick={AddLoan}>تایید</Button>
      </Flex>
    </Flex>
  );
}
export default Add;
