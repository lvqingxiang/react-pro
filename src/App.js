import React from 'react'
import './App.css'
import Router from '@/router'
import zhCN from 'antd/es/locale/zh_CN'
import { ConfigProvider } from 'antd'
import 'moment/locale/zh-cn'
function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <div id="App">
        <Router />
      </div>
    </ConfigProvider>
  )
}

export default App
