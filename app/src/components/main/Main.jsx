import { useState } from "react";
import "../../App.css";
import { Button, Flex } from "antd";
import Persons from "../persons/container/Persons";
import Titles from "../title/container/Titles";
import InstallmentTypes from "../installmentType/container/installmentTypes";


function Main() {
  const [page, setPage] = useState("");

  const mainButtonHandler = (buttonName) => {
    console.log(buttonName);

    setPage(buttonName);
  };
  const refreshPage = () => {
    window.location.reload();
  };

  return page === "persons" ? (
    <Persons mainButtonHandler={mainButtonHandler} />
  ) : page === "titles" ? (
    <Titles mainButtonHandler={mainButtonHandler} />
  ) : page === "InstallmentTypes" ? (
    <InstallmentTypes mainButtonHandler={mainButtonHandler} />
  ) : (
    <Flex vertical gap="middle">
      <Button
        type="primary"
        variant="solid"
        name="persons"
        onClick={() => mainButtonHandler("persons")}
      >
        افراد
      </Button>
      <Button
        type="primary"
        variant="solid"
        name="titles"
        onClick={() => mainButtonHandler("titles")}
      >
        عناوین
      </Button>
      <Button
        type="primary"
        variant="solid"
        name="InstallmentTypes"
        onClick={() => mainButtonHandler("InstallmentTypes")}
      >
        اقساط
      </Button>
    </Flex>
  );
}

export default Main;
