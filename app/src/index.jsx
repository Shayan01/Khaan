import React from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import 'moment/locale/fa'
import {jalaliPlugin} from "@realmodule/antd-jalali";
import dayjs from "dayjs";
import fa_IR from "antd/lib/locale/fa_IR";
import en_US from "antd/lib/locale/en_US";

import App2 from './App2'
import Counter from './components/Counter'
import Todo from './components/todo/Todo'
import Main from './components/main/Main'
 import 'bootstrap/dist/css/bootstrap.css'

 dayjs.extend(jalaliPlugin);
 dayjs.calendar('jalali');

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
