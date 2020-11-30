import React, { Fragment } from 'react'
import { Menu, Layout } from 'antd'
import { BarChartOutlined, TableOutlined } from '@ant-design/icons'
import './index.scss'
import { NavLink, Route, Switch } from 'react-router-dom'
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
  render() {
    return (
      <Fragment>
        <Layout>
          <Header className="header">碗圆后台管理系统</Header>
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
                style={{ background: '#14293e' }}
              >
                <Menu.Item icon={<BarChartOutlined />}>
                  <NavLink to={`${this.props.match.url}/form`}>FORM</NavLink>
                </Menu.Item>
                <Menu.Item icon={<TableOutlined />}>
                  <NavLink to={`${this.props.match.url}/table`}>TABLE</NavLink>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Content className="center">
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
