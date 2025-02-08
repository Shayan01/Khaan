import axios from 'axios'
import { PAY_URL } from '../../../helper/constants/personColomns'
import {  PayDeleteForm } from '../../../helper/dataTypes/person/Delete/dataTypes'
import { Button, Flex } from 'antd'
import { topButtons } from '../../../helper/Styles/Person/List/style'

function Delete({ pay, cancleDelete , refreshPage}:PayDeleteForm ) {


  const DeletePay = () => {
    axios.delete(PAY_URL + '/' + pay.id).then((res) => {
      refreshPage();
    })
  }
  return (
    <Flex style={topButtons} vertical gap="middle">
      <Flex gap="small">
        <label htmlFor='titleId'>عنوان</label>
        <input
          type='text'
          // value={installmentType.titleId}
          name='firstName'
          readOnly={true}
        />
      </Flex>
     
      <Flex gap="small">
        <Button onClick={cancleDelete}>بازگشت</Button>
        <Button onClick={DeletePay}>تایید</Button>
      </Flex>
    </Flex>
  )
}

export default Delete
