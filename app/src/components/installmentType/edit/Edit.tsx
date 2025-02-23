import axios from "axios";
import { useEffect, useState } from "react";
import { INSTALLMENT_TYPE_URL } from "../../../helper/constants/personColomns";
import { InstallmentTypeEditForm } from "../../../helper/dataTypes/person/Edit/dataTypes";
import { Button, Flex } from "antd";
import { topButtons } from "../../../helper/Styles/Person/List/style";
import Select from "../../title/select/Select";

function Edit({
  installmentType,
  cancleEdit,
  refreshPage,
}: InstallmentTypeEditForm) {
  const [installmentTypeValues, setInstallmentTypeValues] = useState({
    id: installmentType.id,
    count: installmentType.count,
    titleId: installmentType.titleId,
  });
  const [selectTitle, setSelectTitle] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState({
    id: installmentType.titleId,
    caption: installmentType.title,
  });
  // useEffect(() => {
  //   console.log(installmentTypeValues.count);
  // }, [installmentTypeValues]);
  const titleSelectHandler = () => setSelectTitle(true);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
      switch (name) {
      case "count":
        setInstallmentTypeValues({
          ...installmentTypeValues,
          count: parseInt(e.target.value),
        });
        break;
      default:
        break;
    }
  };
  const updateInstallmentType = () => {
    let newTitleValues = {
      id: installmentTypeValues.id,
      titleId: selectedTitle.id,
      count: installmentTypeValues.count,
    };
    console.log(INSTALLMENT_TYPE_URL + "/" + newTitleValues.id);
    console.log(newTitleValues);
    
    axios
      .put(INSTALLMENT_TYPE_URL + "/" + newTitleValues.id, newTitleValues)
      .then((res) => {
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
        <label htmlFor="titleId">اقساط</label>
        <input
          type="text"
          value={installmentTypeValues.count}
          name="count"
          onChange={onChangeHandler}
        />
      </Flex>
      <Flex gap="small">
        <Button onClick={cancleEdit}>بازگشت</Button>
        <Button onClick={updateInstallmentType}>تایید</Button>
      </Flex>
    </Flex>
  );
}

export default Edit;
