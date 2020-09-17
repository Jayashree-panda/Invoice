import React, { FC } from 'react'
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu, Breadcrumb } from "antd";
import Form from './Form';
const { Header, Content, Footer } = Layout;

const NewForm: FC<{}> = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: "5rem 0rem", alignSelf: "center" }}>
        <div className="site-layout-content">
          <Form />
        </div>
      </Content>
    </Layout>
  );
};

export default NewForm
