import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import './DefaultLayout.scss'
import routes from '../../routes'
import Header from './DefaultHeader'
import Footer from './DefaultFooter'
import Sidebar from './DefaultSidebar'

const { Content } = Layout;

const Home = () => {
  const [collapsed, setCollapsed] = useState(false)
  const toggle = () => setCollapsed(prev => !prev)

  return (
    <Layout>
      <Sidebar collapsed={collapsed} />
      <Layout className="site-layout full-screen">
        <Header toggle={toggle} collapsed={collapsed} />
        <Content className="site-layout-background">
          <Switch>
            {/* <Route path="/" name="Home" render={props => <Home {...props} />} /> */}
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <route.component {...props} />
                  )} />
              ) : (null);
            })}
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  )
}
export default Home