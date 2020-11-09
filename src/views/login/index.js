import React, { Component } from 'react'
import { Form, Input, Button, Card } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './index.css'
import { withRouter } from 'react-router-dom'
class Login extends Component {
  constructor() {
    super()
    this.state = {
      userInfo: {
        username: '',
        password: '',
      },
    }
  }
  handleLogin = () => {
    this.props.history.push('/dashboard')
  }
  render() {
    return (
      <div>
        <h1 className="login-title">碗圆后台管理系统</h1>
        <div className="login-content"></div>
        <Card className="login-form" hoverable>
          <Form>
            <Form.Item rules={{ required: true, message: '请输入用户名' }}>
              <Input prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item
              type="password"
              rules={{ required: true, message: '请输入密码' }}
            >
              <Input prefix={<LockOutlined />} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" block onClick={this.handleLogin}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}
export default withRouter(Login)
