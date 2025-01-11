import axios from 'axios'
import { TITLE_URL } from '../../../helper/constants/personColomns'
import { TitleDeleteForm } from '../../../helper/dataTypes/person/Delete/dataTypes'
import { Button, Flex } from 'antd'
import { topButtons } from '../../../helper/Styles/Person/List/style'

function Delete({ title, cancleDelete , refreshPage}:TitleDeleteForm ) {


  const DeleteTitle = () => {
    axios.delete(TITLE_URL + '/' + title.id).then((res) => {
      console.log(res);
      
      refreshPage();
    })
  }
  return (
    <Flex style={topButtons} vertical gap="middle">
      <Flex gap="small">
        <label htmlFor='caption'>عنوان</label>
        <input
          type='text'
          value={title.caption}
          name='firstName'
          readOnly={true}
        />
      </Flex>
     
      <Flex gap="small">
        <Button onClick={cancleDelete}>بازگشت</Button>
        <Button onClick={DeleteTitle}>تایید</Button>
      </Flex>
    </Flex>
  )
}

export default Delete
