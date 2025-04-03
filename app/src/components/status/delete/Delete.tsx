import axios from 'axios'
import { STATUS_URL } from '../../../helper/constants/personColomns'
import { StatusDeleteForm } from '../../../helper/dataTypes/person/Delete/dataTypes'
import { Button, Flex } from 'antd'
import { topButtons } from '../../../helper/Styles/Person/List/style'

function Delete({ status, cancleDelete , refreshPage}:StatusDeleteForm ) {


  const DeleteStatus = () => {
    axios.delete(STATUS_URL + '/' + status.id).then((res) => {
      console.log(res);
      
      refreshPage();
    })
  }
  return (
    <Flex style={topButtons} vertical gap="middle">
      <Flex gap="small">
        <label htmlFor='titleId'>عنوان</label>
        <input
          type='text'
          value={status.title}
          name='firstName'
          readOnly={true}
        />
      </Flex>
     
      <Flex gap="small">
        <Button onClick={cancleDelete}>بازگشت</Button>
        <Button onClick={DeleteStatus}>تایید</Button>
      </Flex>
    </Flex>
  )
}

export default Delete
