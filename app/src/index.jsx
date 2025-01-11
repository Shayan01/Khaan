import React from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import fa_IR from 'antd/locale/fa_IR'
import 'moment/locale/fa'

import App2 from './App2'
import Counter from './components/Counter'
import Todo from './components/todo/Todo'
import Main from './components/main/Main'
 import 'bootstrap/dist/css/bootstrap.css'



const domNode = document.getElementById('root')
const root = createRoot(domNode)
root.render(
  <ConfigProvider locale={fa_IR}>
    {/* <Todo/> */}
    <Main />
    {/* <App /> */}
    {/* <App2 /> */}

      {/* <Counter /> */}

  </ConfigProvider>
)
