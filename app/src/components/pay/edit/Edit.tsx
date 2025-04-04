import axios from "axios";
import { useState } from "react";
import { PAY_URL } from "../../../helper/constants/personColomns";
import { PayEditForm } from "../../../helper/dataTypes/person/Edit/dataTypes";
import { Button, Flex } from "antd";
import { topButtons } from "../../../helper/Styles/Person/List/style";
import Select from "../../title/select/Select";
import PriceSelect from "../../Price/select/PriceSelect";

function Edit({
  pay,
  cancleEdit,
  refreshPage,
}: PayEditForm) {
  // const [installmentTypeValues, setInstallmentTypeValues] =
  //   useState(installmentType);
  const [selectPrice, setSelectPrice] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState({titleId:pay.priceId, price: pay.priceId});

  const priceSelectHandler = () => setSelectPrice(true);
  const cancleSelectPrice = () => setSelectPrice(false);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;

    switch (name) {
      case "priceId":
        // setInstallmentTypeValues({ ...installmentTypeValues, titleId: parseInt(value) })
        break;
      default:
        break;
    }

  };
  const updatePrice = () => {
    let newPriceValues = {
      id: pay.id,
      titleId: pay.priceId,
      amount: pay.priceId,
    };
    axios
      .put(
        PAY_URL + "/" + pay.id,
        newPriceValues
      )
      .then((res) => {
        console.log(res);

        refreshPage();
      });
  };
  return selectPrice ? (
    <PriceSelect
    cancleSelectPrice={cancleSelectPrice}
      setSelectPrice={setSelectPrice}
      setSelectedPrice={setSelectedPrice}
    />
  ) : (
    <Flex style={topButtons} vertical gap="middle">
      <Flex gap="small">
        <label htmlFor="PriceId">عنوان</label>
        <input
          type="text"
          value={pay.priceId}
          name="priceId"
          onChange={onChangeHandler}
        />
          <input type="button" value="..." onClick={priceSelectHandler} />
      </Flex>
    
      <Flex gap="small">
        <Button onClick={cancleEdit}>بازگشت</Button>
        <Button onClick={updatePrice}>تایید</Button>
      </Flex>
    </Flex>
  );
}

export default Edit;
