import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Albums } from './pages/Albums/Albums'
import { Authors } from './pages/Authors/Authors'
import { Songs } from './pages/Songs/Songs'


const { Header, Content, Sider } = Layout

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: <Link to={'/'}>All authors</Link>
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
              minHeight: '50vh'
            }}
          >
            <Routes>
              <Route path='/' element={<Authors />}></Route>
              <Route path='/albums' element={<Albums />}></Route>
              <Route path="/albums/:id" element={<Albums />}></Route>
              <Route path='/songs' element={<Songs />}></Route>
              <Route path="/songs/:id" element={<Songs />}></Route>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;
