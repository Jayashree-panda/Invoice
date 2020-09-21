/** React Components */
import { Row, Col, Input } from "antd";
import React, { FC, useState } from "react";
import AsyncSelect from "react-select/async";
import TextArea from "antd/lib/input/TextArea";

/** Custom CSS */
import "../styles/form.css";
import "antd/dist/antd.css";
import { asyncSelectStyles } from "../styles/Select";
import AddLine from "../Icons/AddLine";
import Delete from "../Icons/Delete";

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

const ProductListTable: FC<{}> = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

  const handleInputChange = (newValue: string) => {
    const inputValue = newValue.replace(/\W/g, "");
    setInputValue(inputValue);
    return inputValue;
  };

  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index: number) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  return (
    <>
      <Row>
        <Col span={4}>
          <div className="document-layout__section">
            <span className="document-layout__span">Product Code</span>
          </div>
        </Col>
        <Col span={8}>
          <div className="document-layout__section">
            <span className="document-layout__span">Description of Goods</span>
          </div>
        </Col>
        <Col span={3}>
          <div className="document-layout__section">
            <span className="document-layout__span">Unit Quantity</span>
          </div>
        </Col>
        <Col span={3}>
          <div className="document-layout__section">
            <span className="document-layout__span">Unit Type</span>
          </div>
        </Col>
        <Col span={3}>
          <div className="document-layout__section">
            <span className="document-layout__span">Price</span>
          </div>
        </Col>
        <Col span={3}>
          <div className="document-layout__section">
            <span className="document-layout__span">Amount</span>
          </div>
        </Col>
      </Row>
      <Row style={{ minHeight: "12rem" }}>
        <div
          className="document-layout__section"
          style={{ minHeight: "12rem" }}
        >
          {inputList.map((x, i) => {
            return (
              <Row key={i}>
                <Col span={4}>
                  <div className="document-edit-block">
                    <div className="document-edit-block__content document-edit-block--inline">
                      <div
                        title="Delete"
                        className="document-edit-block__table-content-row-action document-edit-block__table-content-row-action--danger"
                        onClick={() => handleRemoveClick(i)}
                      >
                        <Delete />
                      </div>
                      <AsyncSelect
                        cacheOptions
                        loadOptions={loadOptions}
                        defaultOptions
                        onInputChange={handleInputChange}
                        isClearable={true}
                        styles={asyncSelectStyles}
                        className="document-edit-block__select"
                      />
                    </div>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="document-edit-block">
                    <div className="document-edit-block__content">
                      <TextArea
                        value={value}
                        className="document-edit-block__input document-edit-block__textfield"
                        autoSize={{ minRows: 1, maxRows: 5 }}
                      />
                    </div>
                  </div>
                </Col>
                <Col span={3}>
                  <div className="document-edit-block">
                    <div className="document-edit-block__content">
                      <Input
                        className="document-edit-block__input document-edit-block__textfield document-edit-block__input--right"
                        value={0}
                      />
                    </div>
                  </div>
                </Col>
                <Col span={3}>
                  <div className="document-edit-block">
                    <div className="document-edit-block__content">
                      <Input className="document-edit-block__input document-edit-block__textfield" />
                    </div>
                  </div>
                </Col>
                <Col span={3}>
                  <div className="document-edit-block">
                    <div className="document-edit-block__content">
                      <Input
                        className="document-edit-block__input document-edit-block__textfield document-edit-block__input--right"
                        value={0.0}
                      />
                    </div>
                  </div>
                </Col>
                <Col span={3}>
                  <div className="document-edit-block  document-edit-block--right">
                    <label className="document-edit-block__label document-edit-block__amount">
                      0.00
                    </label>
                  </div>
                </Col>
              </Row>
            );
          })}
          <Row>
            <div className="document-edit-block__table-button">
              <button
                type="button"
                className="btn btn--2 btn--secondary-blue btn--icon-left"
                onClick={handleAddClick}
              >
                <AddLine />
                Add Line
              </button>
            </div>
          </Row>
        </div>
      </Row>
      <Row>
        <div className="document-layout__section">
          <Row>
            <Col span={12}>
              <label className="document-edit-block__label--consignment document-edit-block--right">
                Consignment Total
              </label>
            </Col>
            <Col span={3}>
              <label className="document-edit-block__label--consignment_total_amount document-edit-block--right">
                0
              </label>
            </Col>
            <Col span={9}>
              <label className="document-edit-block__label--consignment_total_amount document-edit-block--right">
                0.0
              </label>
            </Col>
          </Row>
        </div>
      </Row>
    </>
  );
};

export default ProductListTable;
