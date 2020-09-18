import React, { FC } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout } from "antd";
import Form from "./Form";
const { Content } = Layout;

const NewForm: FC<{}> = () => {
  return (
    <Layout className="layout" style={{ background: "#f5f6f8" }}>
      <Content style={{ margin: "12px auto 18px" }}>
        <div className="site-layout-content">
          <Form />
        </div>
      </Content>
    </Layout>
  );
};

export default NewForm;
