import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import './DefaultLayout.scss'

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
const { Header, Sider, Content, Footer } = Layout;

export default function DefaultFooter() {
  return (
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  )
}
