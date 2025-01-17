import axios from 'axios'
import { useState } from 'react'
import { INSTALLMENT_TYPE_URL } from '../../../helper/constants/personColomns'
import { InstallmentTypeEditForm } from '../../../helper/dataTypes/person/Edit/dataTypes'
import { Button, Flex } from 'antd'
import { topButtons } from '../../../helper/Styles/Person/List/style'

function Edit({ installmentType , cancleEdit, refreshPage } : InstallmentTypeEditForm) {
  const [installmentTypeValues, setInstallmentTypeValues] = useState(installmentType)

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name
    let value = e.target.value

    switch (name) {
      case 'titleId':
        // setInstallmentTypeValues({ ...installmentTypeValues, titleId: parseInt(value) })
        break
      default:
        break
    }
    console.log(installmentTypeValues)
  }
  const updateInstallmentType = () => {
    let newTitleValues = {
      id : installmentTypeValues.id,
      title: installmentTypeValues.title,
      count: installmentTypeValues.count,
   
    }
    console.log(installmentTypeValues)
    console.log(newTitleValues)
    console.log(INSTALLMENT_TYPE_URL + '/' + installmentTypeValues.id)

    axios
      .put(INSTALLMENT_TYPE_URL + '/' + installmentTypeValues.id, newTitleValues)
      .then((res) => {
        console.log(res);
        
        refreshPage()
      })
  }
  return (
    <Flex style={topButtons} vertical gap="middle">
      <Flex gap="small">
        <label htmlFor='titleId'>عنوان</label>
        <input
          type='text'
          value={installmentTypeValues.title.id}
          name='titleId'
          onChange={onChangeHandler}
        />
      </Flex>
      <Flex gap="small">
        <label htmlFor='titleId'>اقساط</label>
        <input
          type='text'
          value={installmentTypeValues.count}
          name='count'
          onChange={onChangeHandler}
        />
      </Flex>
      <Flex gap="small">
        <Button onClick={cancleEdit}>بازگشت</Button>
        <Button onClick={updateInstallmentType}>تایید</Button>
      </Flex>
    </Flex>
  )
}

export default Edit
