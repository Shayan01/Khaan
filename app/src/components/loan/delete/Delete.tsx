import axios from 'axios'
import { LOAN_URL } from '../../../helper/constants/personColomns'
import { LoanDeleteForm } from '../../../helper/dataTypes/person/Delete/dataTypes'
import { Button, Flex } from 'antd'
import { topButtons } from '../../../helper/Styles/Person/List/style'

function Delete({ loan, cancleDelete , refreshPage}:LoanDeleteForm ) {


  const DeleteLoan = () => {
    axios.delete(LOAN_URL + '/' + loan.id).then((res) => {
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
          // value={installmentType.titleId}
          name='firstName'
          readOnly={true}
        />
      </Flex>
     
      <Flex gap="small">
        <Button onClick={cancleDelete}>بازگشت</Button>
        <Button onClick={DeleteLoan}>تایید</Button>
      </Flex>
    </Flex>
  )
}

export default Delete
