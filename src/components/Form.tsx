import React, { FC, useState } from "react";
import { Row, Col, Input, Menu } from "antd";
import "antd/dist/antd.css";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import AsyncSelect from "react-select/async";
import Title from "antd/lib/typography/Title";
import TextArea from "antd/lib/input/TextArea";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./form.css";

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
          <div className="document-layout__section">
            <label className="document-edit-block__label">Seller</label>
            <div className="document-edit-block__content drop-down_content-lg">
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
            <div className="document-layout__section">
              <div className="document-edit-block  document-edit-block--right">
                <label className="document-edit-block__label">Pages</label>
                <div className="document-edit-block__content">
                  <div className="document-edit-block__page-number">1 of 1</div>
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <Col span={12}>
              <div className="document-edit-block document-layout__section">
                <label className="document-edit-block__label">
                  Quote Number
                </label>
                <div className="document-edit-block__content">
                  <Input placeholder="Basic usage" />
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className="document-edit-block document-layout__section">
                <label className="document-edit-block__label">Date</label>
                <div className="document-edit-block__content">
                  <DatePicker selected={startDate} onChange={handleChange} />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style={{ height: "9rem" }}>
        <Col span={12}>
          <div className="document-layout__section">
            <label className="document-edit-block__label">Buyer</label>
            <div className="document-edit-block__content drop-down_content-lg">
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
          <div className="document-layout__section">
            <div className="document-edit-block__content drop-down_content-lg">
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Row>
            <Col span={12}>
              <div className="document-layout__section">
                <div className="document-edit-block">
                  <label className="document-edit-block__label">
                    Method of Dispatch
                  </label>
                  <div className="document-edit-block__content drop-down_content-md">
                    <AsyncSelect
                      cacheOptions
                      loadOptions={loadOptions}
                      defaultOptions
                      onInputChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className="document-layout__section">
                <div className="document-edit-block">
                  <label className="document-edit-block__label">
                    Type of Shipment
                  </label>
                  <div className="document-edit-block__content drop-down_content-md">
                    <AsyncSelect
                      cacheOptions
                      loadOptions={loadOptions}
                      defaultOptions
                      onInputChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <div className="document-layout__section">
                <div className="document-edit-block">
                  <label className="document-edit-block__label">
                    Port of Loading
                  </label>
                  <div className="document-edit-block__content drop-down_content-md">
                    <AsyncSelect
                      cacheOptions
                      loadOptions={loadOptions}
                      defaultOptions
                      onInputChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className="document-layout__section">
                <div className="document-edit-block">
                  <label className="document-edit-block__label">
                    Port of Discharge
                  </label>
                  <div className="document-edit-block__content drop-down_content-md">
                    <AsyncSelect
                      cacheOptions
                      loadOptions={loadOptions}
                      defaultOptions
                      onInputChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <div className="document-layout__section">
            <label className="document-edit-block__label">
              Terms / Method of Payment
            </label>
            <div className="document-edit-block__content">
              <TextArea
                value={value}
                placeholder="Controlled autosize"
                autoSize={{ minRows: 3, maxRows: 5 }}
              />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div className="document-layout__section">
            <label className="document-edit-block__label">
              Additional Information
            </label>
            <div className="document-edit-block__content">
              <TextArea
                value={value}
                placeholder="Controlled autosize"
                autoSize={{ minRows: 10, maxRows: 15 }}
              />
            </div>
          </div>
        </Col>
        <Col span={12}>
          <Row>
            <div className="document-layout__section">
              <Input placeholder="Basic usage" />
              <Input placeholder="Basic usage" />
            </div>
          </Row>
          <Row>
            <div className="document-layout__section">
              <div className="document-edit-block">
                <label className="document-edit-block__label">
                  Invoice Total (Incoterms&#174; 2020)
                </label>
                <div
                  className="document-edit-block__layout"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <div className="document-edit-block__layout-block block--width-015">
                    <div className="document-edit-block">
                      <div className="document-edit-block__content">
                        <Input placeholder="Basic usage" />
                      </div>
                    </div>
                  </div>
                  <div className="document-edit-block__layout-block">
                    <div className="document-edit-block">
                      <div className="document-edit-block__content">
                        <Input placeholder="Basic usage" />
                      </div>
                    </div>
                  </div>
                  <div className="document-edit-block__layout-block block--width-015">
                    <div className="document-edit-block">
                      <div className="document-edit-block__content">
                        <Input placeholder="Basic usage" />
                      </div>
                    </div>
                  </div>
                  <div className="document-edit-block__layout-block block--width-030">
                    <div className="document-edit-block">
                      <div className="document-edit-block__content">
                        <div className="document-edit-block__total">
                          <span className="document-edit-block__total-symbol"></span>
                          <input type="text" className="document-edit-block__input" disabled value="0.00"></input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <div className="document-layout__section">
              Place and Date of Issue
              <Input placeholder="Basic usage" />
            </div>
          </Row>
          <Row>
            <div className="document-layout__section">
              Signatory Company
              <Input placeholder="Basic usage" />
            </div>
          </Row>
          <Row>
            <div className="document-layout__section">
              Name of Authorized Signatory
              <Input placeholder="Basic usage" />
            </div>
          </Row>
          <Row>
            <div className="document-layout__section">
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
