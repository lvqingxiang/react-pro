import React, { Fragment } from 'react'
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  InputNumber,
  Switch,
  Row,
  Col,
  Upload,
  Tooltip,
  message,
} from 'antd'
import { UploadOutlined, QuestionCircleOutlined } from '@ant-design/icons'
export default class FormExample extends React.Component {
  constructor() {
    super()
    this.state = {
      merchTypes: [
        '衣服首饰',
        '时尚箱包',
        '潮牌运动',
        '家电厨卫',
        '当季水果',
        '今日特卖',
      ],
      formQuery: {
        merchName: '',
        merchPrice: 0,
        merchNum: 0,
        merchSpec: 0,
        merchStartDate: '',
        merchFreeShipping: 1,
      },
    }
  }
  handleMerchNameChange = (value) => {
    this.state.formQuery.merchName = value
  }
  handleMerchPriceChange = (value) => {
    this.state.formQuery.merchName = value
  }
  handleSelectChange = (value) => {
    this.state.formQuery.merchType = value
  }
  handleDateChange = (date, dateString) => {
    this.state.formQuery.merchStartDate = dateString
  }
  handleSwitchChange = (checked, event) => {
    this.state.formQuery.merchFreeShipping = Number(checked)
    this.setState({
      formQuery: this.state.formQuery,
    })
  }
  handleSubmit = () => {
    console.log(this.state.formQuery)
    message.success('提交成功！')
  }
  render() {
    return (
      <Fragment>
        <Form labelCol={4} wrapperCol={10} layout="horizontal">
          <Form.Item label="商品名称">
            <Input
              name="merchName"
              value={this.state.merchName}
              allowClear
              onChange={this.handleMerchNameChange}
            />
          </Form.Item>
          <Form.Item label="商品种类">
            <Select
              name="merchType"
              placeholder="请选择商品种类"
              onSelect={this.handleSelectChange}
            >
              {this.state.merchTypes.map((item, index) => (
                <Select.Option key={index}>{item}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Row>
              <Col span={8}>
                <Form.Item label="商品价格">
                  <InputNumber
                    name="merchPrice"
                    value={this.state.formQuery.merchPrice}
                    defaultValue={0}
                    precision={2}
                    formatter={(value) => `¥ ${value}`}
                    parser={(value) => value.replace('¥', '')}
                    onChange={this.handleMerchPriceChange}
                  ></InputNumber>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="商品数量">
                  <InputNumber name="merchNum" defaultValue={0}></InputNumber>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="商品规格">
                  <Input name="merchSpec" placeholder="S/M/L ..." />
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item label="上架日期">
            <DatePicker
              inputReadOnly
              onChange={this.handleDateChange}
            ></DatePicker>
          </Form.Item>
          <Form.Item
            label={
              <span>
                商品介绍图&nbsp;
                <Tooltip title="支持jpg/png/jpeg/gif等图片格式">
                  <QuestionCircleOutlined />
                </Tooltip>
              </span>
            }
          >
            <Upload listType="picture">
              <Button type="primary" icon={<UploadOutlined />}>
                上传图片
              </Button>
            </Upload>
          </Form.Item>
          <Form.Item label="快递服务">
            <Switch
              checked={Boolean(this.state.formQuery.merchFreeShipping)}
              checkedChildren="包邮"
              unCheckedChildren="不包邮"
              onChange={this.handleSwitchChange}
            ></Switch>
          </Form.Item>
          <Form.Item style={{ textAlign: 'center' }}>
            <Button type="primary" onClick={this.handleSubmit}>
              确认
            </Button>
          </Form.Item>
        </Form>
      </Fragment>
    )
  }
}
