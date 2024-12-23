import axios from 'axios'
import { PERSON_URL } from '../../../helper/constants/personColomns'
import { PersonDeleteForm } from '../../../helper/dataTypes/person/Delete/dataTypes'
import { Button, Flex } from 'antd'
import { topButtons } from '../../../helper/Styles/Person/List/style'

function DeleteForm({ person, cancleDelete , refreshPage}:PersonDeleteForm ) {


  const DeletePerson = () => {
    axios.delete(PERSON_URL + '/' + person.id).then((res) => {
      console.log(res);
      
      refreshPage();
    })
  }
  return (
    <Flex style={topButtons} vertical gap="middle">
      <Flex gap="small">
        <label htmlFor='firstName'>نــــــــــــــــــــــــام</label>
        <input
          type='text'
          value={person.firstName}
          name='firstName'
          readOnly={true}
        />
      </Flex>
      <Flex gap="small">
        <label htmlFor='lastName'>نام خانوادگی</label>
        <input
          type='text'
          value={person.lastName}
          name='lastName'
          readOnly={true}
        />
      </Flex>
      <Flex gap="small">
        <label htmlFor='phone'>شماره تماس</label>

        <input type='text' value={person.phone} name='phone' readOnly={true} />
      </Flex>
      <Flex gap="small">
        <Button onClick={cancleDelete}>بازگشت</Button>
        <Button onClick={DeletePerson}>تایید</Button>
      </Flex>
    </Flex>
  )
}

export default DeleteForm
