import React, { useState } from 'react'
import { Table, Button, Flex, } from 'antd'
import { columns } from '../../../helper/constants/personColomns'
import EditForm from '../Edit/EditForm'
import DeleteForm from '../Delete/DeleteForm'
import AddForm from '../Add/AddForm';
import '../../../App.css'
import { topButtons } from '../../../helper/Styles/Person/List/style'

function ListForm({ persons , loading, searchHandler, searchText,setLoading,refreshPage }) {
  const [personSelectedForEdit, setPersonSelectedForEdit] = useState(null)
  const [personSelectedForDelete, setPersonSelectedForDelete] = useState(null)
  const [AddNewPerson, setAddNewPerson] = useState(false)
  // console.log('ListForm persons ', persons)
  // console.log('col ', columns)

 
  const cancleEdit = () => {
    setPersonSelectedForEdit(null);
   }
  const cancleDelete = () => {
    setPersonSelectedForDelete(null)
  }
  const cancleAdd  =() => setAddNewPerson(false);
 
  
  const buttonClick = (id,name) => {
    console.log(id);
    console.log(name);
    
    let SelectedButtonId = id
    const SelectedButtonName = name
    let findPerson  = persons.find((p) => p.id === SelectedButtonId)
    switch (SelectedButtonName) {
      case 'editButton':
        setPersonSelectedForEdit(findPerson)
        break
      case 'deleteButton':
        setPersonSelectedForDelete(findPerson)
   
        break
      default:
        break
    }
  }
  persons.forEach(
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
  return personSelectedForEdit != null ? (
    <EditForm
      person={personSelectedForEdit}
      cancleEdit={cancleEdit}
      refreshPage={refreshPage}
    />
  ) : personSelectedForDelete != null ? (
    <DeleteForm
      person={personSelectedForDelete}
      cancleDelete={cancleDelete}
      setLoading={setLoading}
      refreshPage={refreshPage}
    />
  ) : AddNewPerson ? (
    <AddForm cancleAdd={cancleAdd} refreshPage={refreshPage} />
  ) : (
    <Flex vertical gap="middle">
      <Flex style={topButtons} gap="middle" >
        <Button type="primary" onClick={refreshPage}>
          بروزرسانی
        </Button>
        <Button type="primary" onClick={() => setAddNewPerson(true)}>
          افزودن
        </Button>
      </Flex>
      <Flex style={topButtons}  wrap>
        <input type="search" onChange={searchHandler} value={searchText} />
      </Flex>
      <Table
        dataSource={
          searchText && persons
            ? persons.filter(
                (p) =>
                  (p.phone !== null && p.phone.includes(searchText)) ||
                  (p.firstName !== null && p.firstName.includes(searchText)) ||
                  (p.lastName !== null && p.lastName.includes(searchText))
              )
            : persons
        }
        columns={columns}
        rowKey={persons.id}
        loading={loading}
      ></Table>
    </Flex>
  );
}

export default ListForm
