/** React Components */
import React, { FC, useState } from "react";
import { Input } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";

/** Custom Styles */
import "../styles/form.css";
import "../styles/heading.css";
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Input
            className="document-edit-block--heading"
            defaultValue={quotationHeading}
            onChange={(e) => setQuotationHeading(e.target.value)}
          />
          <div
            className="editable-wrapper__btn-wrapper"
            style={{
              paddingBottom: "1rem",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <button
              type="button"
              className="btn btn--2 btn--icon editable-wrapper__btn editable-wrapper__btn--save"
            >
              <CheckOutlined
                onClick={() => handleToggle("heading")}
                style={{
                  // width: "2rem",
                  // height: "1.2rem",
                  cursor: "pointer",
                }}
              />
            </button>
            <button
              type="button"
              className="btn btn--2 btn--icon editable-wrapper__btn editable-wrapper__btn--save"
            >
              <CloseOutlined
                onClick={() => handleToggle("heading")}
                style={{
                  // width: "3rem",
                  // height: "1.5rem",
                  cursor: "pointer",
                }}
              />
            </button>
          </div>
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
