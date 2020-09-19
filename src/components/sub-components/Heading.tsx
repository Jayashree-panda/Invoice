/** React Components */
import React, { FC, useState } from "react";
import { Input } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";

/** Custom Styles */
import "../styles/form.css";
import "antd/dist/antd.css";

const Heading: FC<{}> = () => {
  const [editHeading, setEditHeading] = useState<boolean>(false);
  const [quotationHeading, setQuotationHeading] = useState<string>("QUOTATION");

  const handleToggle = (toggleType: string) => {
    switch (toggleType) {
      case "heading":
        setEditHeading(!editHeading);
        break;
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      {editHeading ? (
        <div>
          <Input
            defaultValue={quotationHeading}
            style={{ width: "15rem", marginBottom: "1rem" }}
            onChange={(e) => setQuotationHeading(e.target.value)}
          />
          <CheckOutlined
            onClick={() => handleToggle("heading")}
            style={{
              marginTop: "1.5rem",
              marginLeft: "0.5rem",
              cursor: "pointer",
            }}
          />
          <CloseOutlined
            onClick={() => handleToggle("heading")}
            style={{
              marginTop: "1.5rem",
              marginLeft: "0.5rem",
              cursor: "pointer",
            }}
          />
        </div>
      ) : (
        <span onClick={() => handleToggle("heading")}>
          <Title level={3}>{quotationHeading}</Title>
        </span>
      )}
    </div>
  );
};

export default Heading;
