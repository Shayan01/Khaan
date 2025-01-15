import React, { useState } from 'react'
import { Table, Button, Flex, } from 'antd'
import { InstallmentTypeColumns } from '../../../helper/constants/personColomns'
import Edit from '../edit/Edit'
import Add from '../add/Add'
import Delete from '../delete/Delete'

import '../../../App.css'
import { topButtons } from '../../../helper/Styles/Person/List/style'

function List({ installmentTypes  , loading, searchHandler, searchText, setLoading, refreshPage, mainButtonHandler }) {
  const [installmentTypeSelectedForEdit, setInstallmentTypeSelectedForEdit] = useState(null)
  const [installmentTypeSelectedForDelete, SetInstallmentTypeSelectedForDelete] = useState(null)
  const [addNewInstallmentType, setAddNewInstallmentType] = useState(false)
  // console.log('ListForm persons ', persons)
  // console.log('col ', columns)

 
  const cancleEdit = () => {
    installmentTypeSelectedForEdit(null);
   }
  const cancleDelete = () => {
    installmentTypeSelectedForDelete(null)
  }
  const cancleAdd  =() => setAddNewInstallmentType(false);
 
  
  const buttonClick = (id, name) => {
   
    let SelectedButtonId = id
    const SelectedButtonName = name
    let findtitle  = installmentTypes.find((p) => p.id === SelectedButtonId)
    switch (SelectedButtonName) {
      case 'editButton':
        setInstallmentTypeSelectedForEdit(findtitle)
        break
      case 'deleteButton':
        SetInstallmentTypeSelectedForDelete(findtitle)
        break
      default:
        break
    }
  }

  
  installmentTypes.forEach(
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
  return installmentTypeSelectedForEdit != null ? (
    <Edit
      title={installmentTypeSelectedForEdit}
      cancleEdit={cancleEdit}
      refreshPage={refreshPage}
    />
  ) : installmentTypeSelectedForDelete != null ? (
    <Delete
      title={installmentTypeSelectedForDelete}
      cancleDelete={cancleDelete}
      setLoading={setLoading}
      refreshPage={refreshPage}
    />
  ) : addNewInstallmentType ? (
    <Add cancleAdd={cancleAdd} refreshPage={refreshPage} />
  ) : (
    <Flex vertical gap="middle">
      <Flex style={topButtons} gap="middle" >
        <Button type="primary" onClick={refreshPage}>
          بروزرسانی
        </Button>
        <Button type="primary" onClick={() => setAddNewInstallmentType(true)}>
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
          searchText && installmentTypes
            ? installmentTypes.filter(
                (p) =>
                  (p.caption !== null && p.caption.includes(searchText)) 
              )
            : installmentTypes
        }
        columns={InstallmentTypeColumns}
        rowKey={installmentTypes.id}
        loading={loading}
      ></Table>
    </Flex>
  );
}

export default List
