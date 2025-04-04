import React, { useEffect, useState } from "react";
import axios from "axios";
import { PAY_URL, TITLE_URL } from "../../../helper/constants/personColomns";
import { PayAddForm } from "../../../helper/dataTypes/person/Add/dataTypes";
import { Pay, Title } from "../../../helper/dataTypes/person/dataType";
import { Button, Flex } from "antd";
import { topButtons } from "../../../helper/Styles/Person/List/style";
import Select from "../../title/select/Select";
import PriceSelect from "../../Price/select/PriceSelect";


import {
  Calendar,
  DatePicker,
  JalaliLocaleListener,
} from "@realmodule/antd-jalali";
import { ConfigProvider } from "antd";
import fa_IR from "antd/lib/locale/fa_IR";
function Add({ cancleAdd, refreshPage }: PayAddForm) {
  const [payValues, setPayValues] = useState<Pay>({
    id: 0,
    score: 0,
    receiptId: 0,
    date: "",
    installmentDate: "",
    traceNumber: 0,
    priceId: 0,
    loanId: 0,
    personId: 0,
    statusId: 0,
  });

  const [selectDate, setselectDate] = useState(null);
  const [selectTitle, setSelectTitle] = useState(false);
  const [selectPrice, setSelectPrice] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState({
    id: 0,
    caption: "",
  });
  const [selectedPrice, setSelectedPrice] = useState({
    id: 0,
    titleId: 0,
    amount: "0",
  });

  const titleSelectHandler = () => setSelectTitle(true);
  const priceSelectHandler = () => setSelectPrice(true);
  const cancleSelectTitle = () => setSelectTitle(false);
  const cancleSelectPrice = () => setSelectPrice(false);
  const AddPay = () => {
    let newPayValues = {
      score: payValues.score,
      receiptId: payValues.receiptId,
      date: payValues.date,
      installmentDate: payValues.installmentDate,
      traceNumber: payValues.traceNumber,
      priceId: payValues.priceId,
      loanId: payValues.loanId,
      personId: payValues.personId,
      statusId: payValues.statusId,
    };
    axios.post(PAY_URL, newPayValues).then((res) => {
      refreshPage();
    });
  };
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;

    switch (name) {
      case "price":
        setPayValues({
          ...payValues,
          priceId: selectedPrice.id,
        });
        break;
      case "score":
        setPayValues({
          ...payValues,
          score: parseInt(value),
        });
        break;
      case "receiptId":
        setPayValues({
          ...payValues,
          receiptId: parseInt(value),
        });
        break;
      case "date":
        setPayValues({
          ...payValues,
          date: value,
        });
        break;
      case "installmentDate":
        setPayValues({
          ...payValues,
          installmentDate: value,
        });
        break;
      case "traceNumber":
        setPayValues({
          ...payValues,
          traceNumber: parseInt(value),
        });
        break;
      case "loanId":
        setPayValues({
          ...payValues,
          loanId: parseInt(value),
        });
        break;
      case "personId":
        setPayValues({
          ...payValues,
          personId: parseInt(value),
        });
        break;
      case "statusId":
        setPayValues({
          ...payValues,
          statusId: parseInt(value),
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
  ) : selectPrice
   ? (
    <PriceSelect
    cancleSelectPrice = {cancleSelectPrice}
      setSelectPrice={setSelectPrice}
      setSelectedPrice={setSelectedPrice}
    />
  ) :(
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
        <label htmlFor="title">امتیاز</label>
        <input
          type="number"
          value={payValues.score}
          name="score"
          onChange={onChangeHandler}
        />
      </Flex>
      <Flex gap="small">
        <label htmlFor="title">شناسه پرداخت</label>
        <input
          type="number"
          value={payValues.receiptId}
          name="receiptId"
          onChange={onChangeHandler}
        />
      </Flex>
      <Flex gap="small">
        <label htmlFor="title">تاریخ پرداخت</label>
        <ConfigProvider locale={fa_IR} direction="rtl">
          <JalaliLocaleListener />
          <DatePicker />
        </ConfigProvider>
      </Flex>
      <Flex gap="small">
        <label htmlFor="title">شماره پیگیری</label>
        <input
          type="number"
          value={payValues.traceNumber}
          name="traceNumber"
          onChange={onChangeHandler}
        />
      </Flex>
      <Flex gap="small">
        <label htmlFor="title">مبلغ</label>
        <input
          data-type="currency"
          type="text"
          value={selectedPrice.amount}
          name="price"
          onChange={onChangeHandler}
        />
         <input type="button" value="..." onClick={priceSelectHandler} />
      </Flex>
      <Flex gap="small">
        <label htmlFor="title">مربوط به وام</label>
        <input
          type="number"
          value={payValues.loanId}
          name="loanId"
          onChange={onChangeHandler}
        />
      </Flex>
      <Flex gap="small">
        <label htmlFor="title">فرد</label>
        <input
          type="number"
          value={payValues.personId}
          name="personId"
          onChange={onChangeHandler}
        />
      </Flex>
      <Flex gap="small">
        <label htmlFor="title">وضعیت</label>
        <input
          type="number"
          value={payValues.statusId}
          name="statusId"
          onChange={onChangeHandler}
        />
      </Flex>
      <Flex gap="small">
        <Button onClick={cancleAdd}>بازگشت</Button>
        <Button onClick={AddPay}>تایید</Button>
      </Flex>
    </Flex>
  );
}
export default Add;
