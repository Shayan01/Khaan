import axios from "axios";
import { useState } from "react";
import { STATUS_URL } from "../../../helper/constants/personColomns";
import { StatusEditForm } from "../../../helper/dataTypes/person/Edit/dataTypes";
import { Button, Flex } from "antd";
import { topButtons } from "../../../helper/Styles/Person/List/style";
import Select from "../../title/select/Select";

function Edit({ status, cancleEdit, refreshPage }: StatusEditForm) {
  const [statusValues, setStatusValues] =
    useState(status);
  const [selectTitle, setSelectTitle] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState({
   id: status.titleId,
    caption: status.title,
  });

  const titleSelectHandler = () => setSelectTitle(true);
  const cancleSelectTitle = () =>setSelectTitle(false);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;

    switch (name) {
      case "title":
        // setInstallmentTypeValues({ ...installmentTypeValues, titleId: parseInt(value) })
        break;
      default:
        break;
    }
  };
  const updateStatus = () => {
    let newStatusValues = {
      id: statusValues.id,
      titleId: selectedTitle.id,
    };
    console.log('1111',newStatusValues);
    
    axios.put(STATUS_URL + "/" + status.id, newStatusValues).then((res) => {
      console.log(res);

      refreshPage();
    });
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
        <Button onClick={cancleEdit}>بازگشت</Button>
        <Button onClick={updateStatus}>تایید</Button>
      </Flex>
    </Flex>
  );
}

export default Edit;
