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
const { Header, Sider, Content } = Layout;

export default function DefaultSidebar({ collapsed }) {
  // const [collapsed, setCollapsed] = useState(false)
  // const toggle = () => setCollapsed(prev => !prev)
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
            </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
            </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
            </Menu.Item>
      </Menu>
    </Sider>
  )
}
