import React from 'react'
import { Layout } from 'antd'

const { Content } = Layout

const Page = ({ title, children }) => (
  <Content className="text-sm">
    {title && <h4 className="post">{title}</h4>}
    <div className="">{children}</div>
  </Content>
)

export default Page
