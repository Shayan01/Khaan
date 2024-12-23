import React from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import fa_IR from 'antd/locale/fa_IR'
import 'moment/locale/fa'
import App from './App'
import App2 from './App2'
import Counter from './components/Counter'
 import 'bootstrap/dist/css/bootstrap.css'



const domNode = document.getElementById('root')
const root = createRoot(domNode)
root.render(
  <ConfigProvider locale={fa_IR}>
    <App />
    {/* <App2 /> */}

      {/* <Counter /> */}

  </ConfigProvider>
)
