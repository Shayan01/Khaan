import   { useEffect, useState } from 'react'
import axios from 'axios'
import { TITLE_URL } from '../../../helper/constants/personColomns'
import '../../../App.css'

import List from '../list/List'
import { Flex } from 'antd'

function Titles({mainButtonHandler}) {
  const [titles, setTitles] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchText, setSearchText] = useState('')


  const refreshPage = () => {
    window.location.reload()
  }
  const searchHandler = (input) => {
    let value = input.target.value
    setSearchText(value)
  }
  useEffect(
    () => {
      axios.get(TITLE_URL).then((res) => {
        setTitles(res.data)
        // console.log('res.data', res.data)
        setLoading(false)
      })
    },
    []
  )

  return loading ? (
    <div>Loading...</div>
  ) :  (
    <Flex style={{margin : "0 2%"}} vertical>
      <List
      mainButtonHandler={mainButtonHandler}
      titles={titles}
        loading={loading}
        searchText={searchText}
        searchHandler={searchHandler}
        setLoading ={setLoading} 
        refreshPage={refreshPage}
      />
    </Flex>
  )
}

export default Titles
