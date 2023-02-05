import { LaptopOutlined, NotificationOutlined, UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { AlbumPage } from './pages/Albums/AlbumPage'
import { Albums } from './pages/Albums/Albums'
import { AuthorPage } from './pages/Authors/AuthorPage'
import { Authors } from './pages/Authors/Authors'
import { Songs } from './pages/Songs/Songs'


const { Header, Content, Sider } = Layout

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
          style={{
            padding: 0
          }}
        >
        </Header>
      <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
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
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            style: {
              color: "white",
              margin: 30
            },
            onClick: () => setCollapsed(!collapsed),
          })}
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
  );
};
export default App;

