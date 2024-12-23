import React, {useState} from 'react'
import axios from 'axios'
import { PERSON_URL } from '../../../helper/constants/personColomns'
import { PersonAddForm } from '../../../helper/dataTypes/person/Add/dataTypes';
import { Person } from '../../../helper/dataTypes/person/dataType';
import { Button, Flex } from 'antd';
import { topButtons } from '../../../helper/Styles/Person/List/style';
function AddForm({cancleAdd, refreshPage}:PersonAddForm){

    const [personValues, setPersonValues] = useState<Person>({id: 0, firstName: '', lastName: '', phone: ''});
     const AddPerson = () => {
        let newPersonValues = {
          id: personValues.id,
          firstName: personValues.firstName,
          lastName: personValues.lastName,
          phone: personValues.phone,
        };
        console.log(personValues)
    
        axios
          .post(PERSON_URL , newPersonValues)
          .then((res) => {
            refreshPage()
          })
      }
    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
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
            <Button onClick={cancleAdd}>بازگشت</Button>
            <Button onClick={AddPerson}>تایید</Button>
          </Flex>
        </Flex>
      )
}
export default AddForm;