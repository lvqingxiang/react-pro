import React, { Fragment } from 'react'
import { Table } from 'antd'
const { Column } = Table
export default class tableExample extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [
        {
          key: 1,
          merchName: '春秋打底衫女',
          merchPrice: 20,
          merchNum: 34,
          merchType: 1,
        },
      ],
      merchTypes: [
        '衣服首饰',
        '时尚箱包',
        '潮牌运动',
        '家电厨卫',
        '当季水果',
        '今日特卖',
      ],
    }
  }
  render() {
    return (
      <Fragment>
        <Table dataSource={this.state.data}>
          <Column
            title="商品名称"
            dataIndex="merchName"
            align="center"
          ></Column>
          <Column
            title="商品价格"
            dataIndex="merchPrice"
            align="center"
          ></Column>
          <Column title="商品数量" dataIndex="merchNum" align="center"></Column>
          <Column
            title="商品类别"
            dataIndex="merchType"
            align="center"
            render={(merchType) => (
              <span>{this.state.merchTypes[merchType]}</span>
            )}
          ></Column>
        </Table>
      </Fragment>
    )
  }
}
