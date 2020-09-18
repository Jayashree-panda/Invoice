/** React Components */
import { Row, Col } from "antd";
import React, { FC, useState } from "react";
import AsyncSelect from "react-select/async";

/** Custom CSS */
import "../form.css";
import "antd/dist/antd.css";
import "react-datepicker/dist/react-datepicker.css";
import { asyncSelectStyles } from "../styles/Select";

const colourOptions = [
  { label: "Create Contact" },
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


const MultipleMethods: FC<{}> = () => {
  const [inputValue, setInputValue] = useState<string>("");

      const handleInputChange = (newValue: string) => {
        console.log(inputValue)
        const inputValue2 = newValue.replace(/\W/g, "");
        setInputValue(inputValue2);
        return inputValue2;
      };

  return (
    <>
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
                  styles={asyncSelectStyles}
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
                  styles={asyncSelectStyles}
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
                  isClearable={true}
                  loadOptions={loadOptions}
                  defaultOptions
                  onInputChange={handleInputChange}
                  styles={asyncSelectStyles}
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
                  isClearable={true}
                  loadOptions={loadOptions}
                  defaultOptions
                  onInputChange={handleInputChange}
                  styles={asyncSelectStyles}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default MultipleMethods
