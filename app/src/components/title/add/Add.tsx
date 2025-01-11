import React, {useState} from 'react'
import axios from 'axios'
import { TITLE_URL } from '../../../helper/constants/personColomns'
import { TitleAddForm } from '../../../helper/dataTypes/person/Add/dataTypes';
import { Title } from '../../../helper/dataTypes/person/dataType';
import { Button, Flex } from 'antd';
import { topButtons } from '../../../helper/Styles/Person/List/style';
function Add({cancleAdd, refreshPage}:TitleAddForm){

    const [titleValues, setTitleValues] = useState<Title>({id : 0,  caption: ''});
     const AddPerson = () => {
        let newTitleValues = {
        caption: titleValues.caption,
       
        };
          
        axios
          .post(TITLE_URL , newTitleValues)
          .then((res) => {
            refreshPage()
          })
      }
    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
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
            <Button onClick={cancleAdd}>بازگشت</Button>
            <Button onClick={AddPerson}>تایید</Button>
          </Flex>
        </Flex>
      )
}
export default Add;