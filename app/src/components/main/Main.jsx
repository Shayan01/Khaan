import { useState } from "react";
import "../../App.css";
import { Button, Flex } from "antd";
import Persons from "../persons/container/Persons";
import Titles from "../title/container/Titles";
import InstallmentTypes from "../installmentType/container/installmentTypes";
import Prices from "../Price/container/prices";
import Statuses from "../status/container/statuses";
import Pays from "../pay/container/pays";

function Main() {
  const [page, setPage] = useState("");

  const mainButtonHandler = (buttonName) => {
    console.log(buttonName);

    setPage(buttonName);
  };
  const refreshPage = () => {
    window.location.reload();
  };

  return page === "Pays" ? (
    <Pays mainButtonHandler={mainButtonHandler} />
  ) : page === "Statuses" ? (
    <Statuses mainButtonHandler={mainButtonHandler} />
  ) : page === "Prices" ? (
    <Prices mainButtonHandler={mainButtonHandler} />
  ) : page === "persons" ? (
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
      <Button
        type="primary"
        variant="solid"
        name="Prices"
        onClick={() => mainButtonHandler("Prices")}
      >
        مبالغ
      </Button>
      <Button
        type="primary"
        variant="solid"
        name="Statuses"
        onClick={() => mainButtonHandler("Statuses")}
      >
        وضعیت ها
      </Button>
      <Button
        type="primary"
        variant="solid"
        name="Pays"
        onClick={() => mainButtonHandler("Pays")}
      >
        پرداخت ها
      </Button>
    </Flex>
  );
}

export default Main;
