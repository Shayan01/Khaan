import { useEffect, useState } from "react";
import axios from "axios";
import {
  STATUS_URL,
  TITLE_URL,
} from "../../../helper/constants/personColomns";
import "../../../App.css";

import List from "../list/List";
import { Flex } from "antd";

function Statuses({ mainButtonHandler }) {
  const [statuses, setStatuses] = useState([]);
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
    axios.get(STATUS_URL).then((res) => {
      setStatuses(res.data);
      console.log(res.data);
      
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
        statuses={statuses}
        loading={loading}
        searchText={searchText}
        searchHandler={searchHandler}
        setLoading={setLoading}
        refreshPage={refreshPage}
      />
    </Flex>
  );
}

export default Statuses;
