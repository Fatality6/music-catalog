import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { AlbumPage } from './pages/Albums/AlbumPage'
import { Albums } from './pages/Albums/Albums'
import { AuthorPage } from './pages/Authors/AuthorPage'
import { Authors } from './pages/Authors/Authors'
import { Songs } from './pages/Songs/Songs'
import logo from './common/img/logo.png'


const { Header, Content, Sider } = Layout

const App = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  return (
    <Layout>
      <Header
        style={{
          padding: 0
        }}
      >
        <div className="logo"><img src={logo} style={{ height: 40, margin: 15 }} alt='logo' /></div>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          style: {
            color: "white",
            position: 'absolute',
            top: 12,
            left: 135,
            fontSize: 30
          },
          onClick: () => setCollapsed(!collapsed),
        })}

      </Header>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: <Link to={'/'}>All authors</Link>,
              },
              {
                key: '2',
                icon: <LaptopOutlined />,
                label: <Link to={'/albums'}>All albums</Link>,
              },
              {
                key: '3',
                icon: <NotificationOutlined />,
                label: <Link to={'/songs'}>All songs</Link>,
              },
            ]}
          />

        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: '90vh',
              background: colorBgContainer
            }}
          >
            <Routes>
              <Route path='/' element={<Authors />}></Route>
              <Route path='/albums' element={<Albums />}></Route>
              <Route path="/author/:id" element={<AuthorPage />}></Route>
              <Route path='/songs' element={<Songs />}></Route>
              <Route path="/album/:id" element={<AlbumPage />}></Route>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default App