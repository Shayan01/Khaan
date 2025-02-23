import { useEffect, useState } from "react";
import axios from "axios";
import {
  INSTALLMENT_TYPE_URL,
  TITLE_URL,
} from "../../../helper/constants/personColomns";
import "../../../App.css";

import List from "../list/List";
import { Flex } from "antd";

function InstallmentTypes({ mainButtonHandler }) {
  const [installmentTypes, setInstallmentTypes] = useState([]);
  const [titles, setTitles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  const refreshPage = () => {
    setLoading(true)
  };
  const searchHandler = (input) => {
    let value = input.target.value;
    setSearchText(value);
  };
  useEffect(() => {
    axios.get(INSTALLMENT_TYPE_URL).then((res) => {
      setInstallmentTypes(res.data);
    });
    axios.get(TITLE_URL).then((res) => {
      setTitles(res.data);
    });
    setLoading(false);
  }, [loading]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <Flex style={{ margin: "0 2%" }} vertical>
      <List
        mainButtonHandler={mainButtonHandler}
        titles={titles}
        installmentTypes={installmentTypes}
        loading={loading}
        searchText={searchText}
        searchHandler={searchHandler}
        setLoading={setLoading}
        refreshPage={refreshPage}
      />
    </Flex>
  );
}

export default InstallmentTypes;
