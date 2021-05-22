import React, { useState, Suspense } from 'react'
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

  const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  return (
    <Layout>
      <Sidebar collapsed={collapsed} />
      <Layout className="site-layout full-screen">
        <Header toggle={toggle} collapsed={collapsed} />
        <Content className="site-layout-background">
          <Suspense fallback={loading}>
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
              {/* <Redirect from="/" to="/dashboard" /> */}
            </Switch>
          </Suspense>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  )
}
export default Home