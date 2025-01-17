import { Table, Button, Flex } from "antd";
import {
  TITLE_URL,
  titlesColumns,
} from "../../../helper/constants/personColomns";
import "../../../App.css";
import { topButtons } from "../../../helper/Styles/Person/List/style";
import { useEffect, useState } from "react";
import axios from "axios";

function Select({ titleSelectHandler, setSelectTitle, setSelectedTitle }) {
  const [titles, setTitles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  const buttonClick = (id, name) => {
    let SelectedButtonId = id;
    const SelectedButtonName = name;
    let findtitle = titles.find((p) => p.id === SelectedButtonId);
    setSelectTitle(false);
    setSelectedTitle({ title: findtitle.title, titleId: findtitle.titleId });
  };
  const searchHandler = (input) => {
    let value = input.target.value;
    setSearchText(value);
  };
  useEffect(() => {
    axios.get(TITLE_URL).then((res) => {
      setTitles(res.data);
      setLoading(false);
    });
  }, []);

  titles.forEach(
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
      ))
    )
  );
  return loading ? (
    <div>Loading</div>
  ) : (
    <Flex vertical gap="middle">
      <Flex style={topButtons} gap="middle">
        <Button type="primary">بازگشت</Button>
      </Flex>
      <Flex style={topButtons} wrap>
        <input type="search" onChange={searchHandler} value={searchText} />
      </Flex>
      <Table
        dataSource={
          searchText && titles
            ? titles.filter(
                (p) => p.caption !== null && p.caption.includes(searchText)
              )
            : titles
        }
        columns={titlesColumns}
        rowKey={titles.id}
        loading={loading}
      ></Table>
    </Flex>
  );
}

export default Select;
