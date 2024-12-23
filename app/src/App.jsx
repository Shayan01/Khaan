import  React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table, Button, Flex } from 'antd'
import {PERSON_URL} from './helper/constants/personColomns'
import './App.css'

import ListForm from './components/persons/List/ListForm'

function App() {
  const [persons, setPersons] = useState([])
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
      axios.get(PERSON_URL).then((res) => {
        setPersons(res.data)
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
      <ListForm
        persons={persons}
        loading={loading}
        searchText={searchText}
        searchHandler={searchHandler}
        setLoading ={setLoading} 
        refreshPage={refreshPage}
      />
    </Flex>
  )
}

export default App
