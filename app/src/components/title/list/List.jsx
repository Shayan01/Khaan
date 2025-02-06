import React, { useState } from 'react'
import { Table, Button, Flex, } from 'antd'
import { titlesColumns } from '../../../helper/constants/personColomns'
import Edit from '../edit/Edit'
import Add from '../add/Add'
import Delete from '../delete/Delete'

import '../../../App.css'
import { topButtons } from '../../../helper/Styles/Person/List/style'

function List({ titles , loading, searchHandler, searchText, setLoading, refreshPage, mainButtonHandler }) {
  const [titleSelectedForEdit, setTitleSelectedForEdit] = useState(null)
  const [tileSelectedForDelete, setTitleSelectedForDelete] = useState(null)
  const [addNewTitle, setAddNewTitle] = useState(false)
  // console.log('titles', titles)
  // console.log('searchText ', searchText)

  const cancleEdit = () => {
    setTitleSelectedForEdit(null);
   }
  const cancleDelete = () => {
    setTitleSelectedForDelete(null)
  }
  const cancleAdd  =() => setAddNewTitle(false);
 
  
  const buttonClick = (id,name) => {
   
    let SelectedButtonId = id
    const SelectedButtonName = name
    let findtitle  = titles.find((p) => p.id === SelectedButtonId)
    switch (SelectedButtonName) {
      case 'editButton':
        setTitleSelectedForEdit(findtitle)
        break
      case 'deleteButton':
        setTitleSelectedForDelete(findtitle)
        break
      default:
        break
    }
  }

  
  titles.forEach(
    (p) => (
      (p.key = p.id),
      (p.button = (
        <Flex gap="small">
          <Button
            type="primary"
            name="editButton"
            color="default"
            variant="solid"
            id={p.id}
            onClick={()=>buttonClick(p.id, "editButton")}
          >
            ویرایش
          </Button>
          <Button
            type="primary"
            color="danger"
            variant="solid"
            name="deleteButton"
            id={p.id}
            onClick={()=>buttonClick(p.id, "deleteButton")}
          >
            حذف
          </Button>
        </Flex>
      ))
    )
  );
  return titleSelectedForEdit != null ? (
    <Edit
      title={titleSelectedForEdit}
      cancleEdit={cancleEdit}
      refreshPage={refreshPage}
    />
  ) : tileSelectedForDelete != null ? (
    <Delete
      title={tileSelectedForDelete}
      cancleDelete={cancleDelete}
      setLoading={setLoading}
      refreshPage={refreshPage}
    />
  ) : addNewTitle ? (
    <Add cancleAdd={cancleAdd} refreshPage={refreshPage} />
  ) : (
    <Flex vertical gap="middle">
      <Flex style={topButtons} gap="middle" >
        <Button type="primary" onClick={refreshPage}>
          بروزرسانی
        </Button>
        <Button type="primary" onClick={() => setAddNewTitle(true)}>
          افزودن
        </Button>
        <Button type="primary"   onClick={() => mainButtonHandler("")}>
          بازگشت
        </Button>
      </Flex>
      <Flex style={topButtons}  wrap>
        <input type="search" onChange={searchHandler} value={searchText} />
      </Flex>
      <Table
        dataSource={
          searchText && titles
            ? titles.filter(
                (p) =>
                  (p.caption !== null && p.caption.includes(searchText)) 
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

export default List
