import   { useEffect, useState } from 'react'
import axios from 'axios'
import { INSTALLMENT_TYPE_URL } from '../../../helper/constants/personColomns'
import '../../../App.css'

import List from '../list/List'
import { Flex } from 'antd'

function InstallmentTypes({mainButtonHandler}) {
  const [installmentTypes, setInstallmentTypes] = useState([])
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
      axios.get(INSTALLMENT_TYPE_URL).then((res) => {
        setInstallmentTypes(res.data)
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
        installmentTypes={installmentTypes}
        loading={loading}
        searchText={searchText}
        searchHandler={searchHandler}
        setLoading ={setLoading} 
        refreshPage={refreshPage}
      />
    </Flex>
  )
}

export default InstallmentTypes
