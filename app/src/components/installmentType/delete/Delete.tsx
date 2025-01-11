import axios from 'axios'
import { INSTALLMENT_TYPE_URL } from '../../../helper/constants/personColomns'
import { InstallmentTypeDeleteForm } from '../../../helper/dataTypes/person/Delete/dataTypes'
import { Button, Flex } from 'antd'
import { topButtons } from '../../../helper/Styles/Person/List/style'

function Delete({ installmentType, cancleDelete , refreshPage}:InstallmentTypeDeleteForm ) {


  const DeleteInstallmentType = () => {
    axios.delete(INSTALLMENT_TYPE_URL + '/' + installmentType.id).then((res) => {
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
          value={installmentType.titleId}
          name='firstName'
          readOnly={true}
        />
      </Flex>
     
      <Flex gap="small">
        <Button onClick={cancleDelete}>بازگشت</Button>
        <Button onClick={DeleteInstallmentType}>تایید</Button>
      </Flex>
    </Flex>
  )
}

export default Delete
