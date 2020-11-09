import React, { Fragment } from 'react'
import { Menu, Button, Layout } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BarChartOutlined,
} from '@ant-design/icons'
import './index.css'
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom'
// import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import Form from '@/views/examples/form'
import Table from '@/views/examples/table'
const { Header, Sider, Content } = Layout

class Dashboard extends React.Component {
  state = {
    collapsed: false,
  }
  handleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  handleRouterChange = (item, key) => {}
  render() {
    // const { path } = useRouteMatch()
    // console.log(path)
    return (
      <Fragment>
        <Layout>
          <Header style={{ background: '#132138' }}>ed</Header>
          <Layout>
            <Sider
              className="siderbar"
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.handleCollapsed}
            >
              <Menu
                theme="dark"
                mode="inline"
                style={{ background: '#132138' }}
              >
                <Menu.Item icon={<BarChartOutlined />}>
                  <NavLink to={`${this.props.match.url}/form`}>
                    form表单
                  </NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink to={`${this.props.match.url}/table`}>
                    table表格
                  </NavLink>
                </Menu.Item>
                <Menu.Item>3</Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Content>
                <Switch>
                  <Route
                    path={`${this.props.match.url}/form`}
                    exact
                    component={Form}
                  />
                  <Route
                    path={`${this.props.match.url}/table`}
                    exact
                    component={Table}
                  />
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Fragment>
    )
  }
}
export default Dashboard
