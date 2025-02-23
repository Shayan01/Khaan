import axios from 'axios'
import { useState } from 'react'
import { TITLE_URL } from '../../../helper/constants/personColomns'
import { TitleEditForm } from '../../../helper/dataTypes/person/Edit/dataTypes'
import { Button, Flex } from 'antd'
import { topButtons } from '../../../helper/Styles/Person/List/style'

function Edit({ title , cancleEdit, refreshPage } : TitleEditForm) {
  const [titleValues, setTitleValues] = useState(title)

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name
    let value = e.target.value

    switch (name) {
      case 'caption':
        setTitleValues({ ...titleValues, caption: value })
        break
     
      default:
        break
    }
  }
  const updateTitle = () => {
    let newTitleValues = {
      id : titleValues.id,
      caption: titleValues.caption,
   
    }
 

    axios
      .put(TITLE_URL + '/' + titleValues.id, newTitleValues)
      .then((res) => {     
        refreshPage()
      })
  }
  return (
    <Flex style={topButtons} vertical gap="middle">
      <Flex gap="small">
        <label htmlFor='caption'>عنوان</label>
        <input
          type='text'
          value={titleValues.caption}
          name='caption'
          onChange={onChangeHandler}
        />
      </Flex>
      <Flex gap="small">
        <Button onClick={cancleEdit}>بازگشت</Button>
        <Button onClick={updateTitle}>تایید</Button>
      </Flex>
    </Flex>
  )
}

export default Edit
