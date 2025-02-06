import axios from "axios";
import { useState } from "react";
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
  // const [installmentTypeValues, setInstallmentTypeValues] =
  //   useState(installmentType);
  const [selectTitle, setSelectTitle] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState({titleId:installmentType.titleId, title: installmentType.title});

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
  const updateInstallmentType = () => {
    let newTitleValues = {
      id: installmentType.id,
      titleId: installmentType.titleId,
      count: installmentType.count,
    };
    axios
      .put(
        INSTALLMENT_TYPE_URL + "/" + installmentType.id,
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
        <label htmlFor="titleId">اقساط</label>
        <input
          type="text"
          value={installmentType.count}
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
