import React, { FC, useState } from "react";
import { Divider, Row, Col, Input, Menu, Dropdown } from "antd";
import "antd/dist/antd.css";
import { CheckOutlined, CloseOutlined, DownOutlined } from "@ant-design/icons";
import AsyncSelect from "react-select/async";
import Title from "antd/lib/typography/Title";
import TextArea from "antd/lib/input/TextArea";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const inputStyle = {
  backgroundColor: "pink",
  padding: "15px",
};

const inputStyle2 = {};

const inputStyle3 = {
  padding: "20px",
};

const divinpStyle = {
  border: "1px solid black",
  padding: "0.4rem",
  height: "100%",
  width: "100%",
};

const divinp2style = {
  border: "1px solid black",
  padding: "10px",
  height: "100%",
};

const divinp3style = {
  border: "1px solid black",
  padding: "4px",
  height: "100%",
};

const paraStyle1 = {
  border: "1px solid black",
  height: "100%",
  width: "100%",
};

const paraStyle2 = {};
const vacant = {
  padding: "68px",
  border: "1px solid black",
};

const divStyle2 = {};

const divStyle3 = {
  border: "1px solid black",
  padding: "10px",
};

const divStyle4 = {
  border: "1px solid black",
  padding: "7px",
  paddingBottom: "170px",
};

const divStyle5 = {
  padding: "32px",
  border: "1px solid black",
};

const inputStyle4 = {
  border: "1px solid black",
  padding: "10px",
};
const button1 = {};

const button2 = {};
const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

const colourOptions = [
  { label: "red" },
  { label: "yellow" },
  { label: "black" },
];
const filterColors = (inputValue: string) => {
  return colourOptions.filter((i: { label: string }) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};
const loadOptions = (inputValue: string, callback: (arg0: any) => void) => {
  setTimeout(() => {
    callback(filterColors(inputValue));
  }, 1000);
};

const Form: FC<{}> = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [editHeading, setEditHeading] = useState<boolean>(false);
  const [quotationHeading, setQuotationHeading] = useState<string>("QUOTATION");
  const [value, setValue] = useState<string>("");
  const [startDate, setStartDate] = useState(new Date());

  const handleInputChange = (newValue: string) => {
    const inputValue = newValue.replace(/\W/g, "");
    setInputValue(inputValue);
    return inputValue;
  };

  const handleToggle = (toggleType: string) => {
    switch (toggleType) {
      case "heading":
        setEditHeading(!editHeading);
        break;
    }
  };

  const handleChange = (date: Date) => {
    setStartDate(date);
  };

  return (
    <div>
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
      <Row>
        <Col span={12}>
          <div style={divinpStyle}>
            Seller
            <div style={{ maxWidth: "26rem" }}>
              <AsyncSelect
                cacheOptions
                loadOptions={loadOptions}
                defaultOptions
                onInputChange={handleInputChange}
              />
            </div>
          </div>
        </Col>
        <Col span={12}>
          <Row>
            <div style={paraStyle1}>
              <div style={{ textAlign: "end" }}>
                <p style={paraStyle2}>Pages</p>
                <p style={paraStyle2}>1 of 1</p>
              </div>
            </div>
          </Row>
          <Row>
            <Col span={12}>
              <div style={divinp3style}>
                Quote Number
                <Input placeholder="Basic usage" />
              </div>
            </Col>
            <Col span={12}>
              <div style={divinp3style}>
                Date <br />
                <DatePicker selected={startDate} onChange={handleChange} />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{    height: '9rem'}}>
        <Col span={12}>
          <div style={divinpStyle}>
            Buyer
            <div style={{ maxWidth: "26rem" }}>
              <AsyncSelect
                cacheOptions
                loadOptions={loadOptions}
                defaultOptions
                onInputChange={handleInputChange}
              />
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div style={paraStyle1}></div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Row>
            <Col span={12}>
              <div style={divinp2style}>
                Method of Dispatch
                <div style={{ maxWidth: "13rem" }}>
                  <AsyncSelect
                    cacheOptions
                    loadOptions={loadOptions}
                    defaultOptions
                    onInputChange={handleInputChange}
                  />
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div style={divinp2style}>
                Type of Shipment
                <div style={{ maxWidth: "13rem" }}>
                  <AsyncSelect
                    cacheOptions
                    loadOptions={loadOptions}
                    defaultOptions
                    onInputChange={handleInputChange}
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <div style={divinp2style}>
                Port of Loading
                <div style={{ maxWidth: "13rem" }}>
                  <AsyncSelect
                    cacheOptions
                    loadOptions={loadOptions}
                    defaultOptions
                    onInputChange={handleInputChange}
                  />
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div style={divinp2style}>
                Port of Discharge
                <div style={{ maxWidth: "13rem" }}>
                  <AsyncSelect
                    cacheOptions
                    loadOptions={loadOptions}
                    defaultOptions
                    onInputChange={handleInputChange}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <div style={divinpStyle}>
            Terms / Method of Payment
            <TextArea
              value={value}
              placeholder="Controlled autosize"
              autoSize={{ minRows: 3, maxRows: 5 }}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div style={divinpStyle}>
            Additional Information
            <TextArea
              value={value}
              placeholder="Controlled autosize"
              autoSize={{ minRows: 10, maxRows: 15 }}
            />
          </div>
        </Col>
        <Col span={12}>
          <Row>
            <div style={divinpStyle}>
              <Input placeholder="Basic usage" />
              <Input placeholder="Basic usage" />
            </div>
          </Row>
          <Row>
            <div style={divinpStyle}>
              Invoice Total (Incoterms® 2020)
              <Input placeholder="Basic usage" />
            </div>
          </Row>
          <Row>
            <div style={divinpStyle}>
              Place and Date of Issue
              <Input placeholder="Basic usage" />
            </div>
          </Row>
          <Row>
            <div style={divinpStyle}>
              Signatory Company
              <Input placeholder="Basic usage" />
            </div>
          </Row>
          <Row>
            <div style={divinpStyle}>
              Name of Authorized Signatory
              <Input placeholder="Basic usage" />
            </div>
          </Row>
          <Row>
            <div style={divinpStyle}>
              Signature
              <TextArea
                value={value}
                placeholder="Controlled autosize"
                autoSize={{ minRows: 3, maxRows: 5 }}
              />
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default Form;
