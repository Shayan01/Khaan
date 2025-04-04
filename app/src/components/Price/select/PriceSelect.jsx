import { Table, Button, Flex } from "antd";
import {
  PRICE_URL,
  PriceColumns,
  TITLE_URL,
} from "../../../helper/constants/personColomns";
import "../../../App.css";
import { topButtons } from "../../../helper/Styles/Person/List/style";
import { useEffect, useState } from "react";
import axios from "axios";

function PriceSelect({ cancleSelectPrice, setSelectPrice, setSelectedPrice }) {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [titles, setTitles] = useState([]);
  const buttonClick = (id, name) => {
    let SelectedButtonId = id;
    let findPrice = prices.find((p) => p.id === SelectedButtonId);

    setSelectedPrice({ id : findPrice.id, amount: findPrice.amount, titleId: findPrice.titleId });
    setSelectPrice(false);
  };
  const searchHandler = (input) => {
    let value = input.target.value;
    setSearchText(value);
  };
  useEffect(() => {
    axios.get(PRICE_URL).then((res) => {
      setPrices(res.data);
    });
    axios.get(TITLE_URL).then((res) => {
      setTitles(res.data);
    });
    setLoading(false);
  }, []);

  prices.forEach(
    (p) => (
      (p.key = p.id),
      (p.button = (
        <Flex gap="small">
          <Button
            type="primary"
            color="danger"
            variant="solid"
            name="selectButton"
            id={p.id}
            onClick={() => buttonClick(p.id, "selectButton")}
          >
            انتخاب
          </Button>
        </Flex>
      )),
      (p.title = titles.find((t) => t.id === p.titleId).caption)
    )
  );
  return loading ? (
    <div>Loading</div>
  ) : (
    <Flex vertical gap="middle">
      <Flex style={topButtons} gap="middle">
        <Button type="primary" onClick={cancleSelectPrice}>
          بازگشت
        </Button>
      </Flex>
      <Flex style={topButtons} wrap>
        <input type="search" onChange={searchHandler} value={searchText} />
      </Flex>
      <Table
        dataSource={
          searchText && prices
            ? prices.filter(
                (p) => p.caption !== null && p.caption.includes(searchText)
              )
            : prices
        }
        columns={PriceColumns}
        rowKey={prices.id}
        loading={loading}
      ></Table>
    </Flex>
  );
}

export default PriceSelect;
