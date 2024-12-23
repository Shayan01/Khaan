import React,{useState} from 'react';
import {DatePicker, message, Alert, Button} from 'antd'
import './App.css';
import dayjs,{Dayjs} from 'dayjs'

function App() {
  const [date, setDate] = useState<Dayjs | null>(null)
  const [messageApi, contextHolder] = message.useMessage()
  const handleChange = (value : Dayjs|null) =>{
    // messageApi.info(
    //   `select date : ${value ? value.format("YYYY-MM-DD") : "none"}`
    // );
    // <Alert message='selected Date' description ={value ? value.format("YYYY-MM-DD") : "none"}/>
    <Alert message="Sedddlected Date" description={date ? date.format('YYYY-MM-DD') : 'None'} />
setDate(value) 
}
  return (
    <div style={{ width: 400, margin: "100px auto" }}>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        {/* Selected date : {date ? date.format("YYYY-MM-DD") : "none"} */}
        <Alert message="Sedddlected Date" description={date ? date.format('YYYY-MM-DD') : 'None'} />
        <Button type='primary'>primary</Button>
      </div>
      {/* {contextHolder} */}
    </div>
  );
}

export default App;
