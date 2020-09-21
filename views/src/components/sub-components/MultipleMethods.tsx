/** React Components */
import { Row, Col } from "antd";
import React, { FC, useState } from "react";
import AsyncSelect from "react-select/async";

/** Custom CSS */
import "../styles/form.css";
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

interface MultipleMethodsProps {
  getValues(type: string, x: any): void;
}

const MultipleMethods: FC<MultipleMethodsProps> = ({getValues}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (newValue: string) => {
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
                  onChange={(value) => getValues("methodOfDispatch", value)}
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
                  onChange={(value) => getValues("typeOfShipment", value)}
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
                  onChange={(value) => getValues("portOfLoading", value)}
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
                  onChange={(value) => getValues("portOfDischarge", value)}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default MultipleMethods;
