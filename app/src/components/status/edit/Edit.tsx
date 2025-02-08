import axios from "axios";
import { useState } from "react";
import { STATUS_URL } from "../../../helper/constants/personColomns";
import { StatusEditForm } from "../../../helper/dataTypes/person/Edit/dataTypes";
import { Button, Flex } from "antd";
import { topButtons } from "../../../helper/Styles/Person/List/style";
import Select from "../../title/select/Select";

function Edit({
  status,
  cancleEdit,
  refreshPage,
}: StatusEditForm) {
  // const [installmentTypeValues, setInstallmentTypeValues] =
  //   useState(installmentType);
  const [selectTitle, setSelectTitle] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState({titleId:status.titleId, title: status.title});

  const titleSelectHandler = () => setSelectTitle(true);
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
    let newTitleValues = {
      id: status.id,
      titleId: status.titleId,
      title: status.title,
    };
    axios
      .put(
        STATUS_URL + "/" + status.id,
        newTitleValues
      )
      .then((res) => {
        console.log(res);

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
          value={selectedTitle.title}
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
