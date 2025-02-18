import axios from "axios";
import { useState } from "react";
import { LOAN_URL } from "../../../helper/constants/personColomns";
import { LoanEditForm } from "../../../helper/dataTypes/person/Edit/dataTypes";
import { Button, Flex } from "antd";
import { topButtons } from "../../../helper/Styles/Person/List/style";
import Select from "../../title/select/Select";

function Edit({
  loan,
  cancleEdit,
  refreshPage,
}: LoanEditForm) {
  // const [installmentTypeValues, setInstallmentTypeValues] =
  //   useState(installmentType);
  const [selectTitle, setSelectTitle] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState({titleId:loan.titleId, title: loan.title});

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
  const updateLoan = () => {
    let newTitleValues = {
      id: loan.id,
      titleId: loan.titleId,
      code: loan.code,
    };
    axios
      .put(
        LOAN_URL + "/" + loan.id,
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
        <label htmlFor="code">کد</label>
        <input
          type="text"
          value={loan.code}
          name="count"
          onChange={onChangeHandler}
        />
      </Flex>
      <Flex gap="small">
        <Button onClick={cancleEdit}>بازگشت</Button>
        <Button onClick={updateLoan}>تایید</Button>
      </Flex>
    </Flex>
  );
}

export default Edit;
