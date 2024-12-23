import axios from 'axios'
import { useState } from 'react'
import { PERSON_URL } from '../../../helper/constants/personColomns'
import { PersonEditForm } from '../../../helper/dataTypes/person/Edit/dataTypes'
import { Button, Flex } from 'antd'
import { topButtons } from '../../../helper/Styles/Person/List/style'

function EditForm({ person , cancleEdit, refreshPage } : PersonEditForm) {
  const [personValues, setPersonValues] = useState(person)

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name
    let value = e.target.value

    switch (name) {
      case 'firstName':
        setPersonValues({ ...personValues, firstName: value })
        break
      case 'lastName':
        setPersonValues({ ...personValues, lastName: value })
        break
      case 'phone':
        setPersonValues({ ...personValues, phone: value })
        break
      default:
        break
    }
    console.log(personValues)
  }
  const updatePerson = () => {
    let newPersonValues = {
      id: personValues.id,
      firstName: personValues.firstName,
      lastName: personValues.lastName,
      phone: personValues.phone,
    }
    console.log(personValues)

    axios
      .put(PERSON_URL + '/' + personValues.id, newPersonValues)
      .then((res) => {
        refreshPage()
      })
  }
  return (
    <Flex style={topButtons} vertical gap="middle">
      <Flex gap="small">
        <label htmlFor='firstName'>نــــــــــــــــــــــــام</label>
        <input
          type='text'
          value={personValues.firstName}
          name='firstName'
          onChange={onChangeHandler}
        />
      </Flex>
      <Flex gap="small">
        <label htmlFor='lastName'>نام خانوادگی</label>
        <input
          type='text'
          value={personValues.lastName}
          name='lastName'
          onChange={onChangeHandler}
        />
      </Flex>
      <Flex gap="small">
        <label htmlFor='phone'>شماره تماس</label>

        <input
          type='text'
          value={personValues.phone}
          name='phone'
          onChange={onChangeHandler}
        />
      </Flex>
      <Flex gap="small">
        <Button onClick={cancleEdit}>بازگشت</Button>
        <Button onClick={updatePerson}>تایید</Button>
      </Flex>
    </Flex>
  )
}

export default EditForm
