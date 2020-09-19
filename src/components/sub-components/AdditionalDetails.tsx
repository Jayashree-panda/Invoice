/** React Components */
import { Row, Input } from "antd";
import React, { FC, useState } from "react";
import DatePicker from "react-datepicker";
import AsyncSelect from "react-select/async";
import TextArea from "antd/lib/input/TextArea";

/** Custom CSS */
import "../styles/form.css";
import "antd/dist/antd.css";
import "react-datepicker/dist/react-datepicker.css";
import { asyncSelectStyles } from "../styles/Select";
import AddLine from "../Icons/AddLine";
import Delete from "../Icons/Delete";
import Percent from "../Icons/Percent";

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

const AdditionalDetails: FC<{}> = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = useState<string>("");
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);
  const [showTaxRow, setShowTaxRow] = useState<boolean>(false)

  const handleChange = (date: Date) => {
    setStartDate(date);
  };

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

  const handleTaxRow = (val: boolean) => {
    setShowTaxRow(val)
  }

  return (
    <>
      <Row>
        <div className="document-layout__section">
          {showTaxRow ? (
            <div className="document-edit-block">
              <div className="document-edit-block__content">
                <div className="document-edit-block--inline">
                  <div
                    title="Delete"
                    onClick={() => handleTaxRow(false)}
                    className="document-edit-block__table-content-row-action document-edit-block__table-content-row-action--danger"
                  >
                    <Delete />
                  </div>
                  <div className="block--width-025">
                    <Input
                      className="document-edit-block__input document-edit-block__textfield"
                      placeholder="Add additional charges or discount"
                    />
                  </div>
                  <div>
                    <Input
                      className="document-edit-block__input document-edit-block__textfield"
                      placeholder=""
                      value="0.00"
                    />
                  </div>
                  <div className="document-edit-block  document-edit-block--right block--width-020">
                    <label className="document-edit-block__label document-edit-block__amount">
                      0.00
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          {inputList.map((x: any, i: any) => {
            return (
              <div className="document-edit-block">
                <div className="document-edit-block__content">
                  <div className="document-edit-block--inline">
                    <div
                      title="Delete"
                      onClick={() => handleRemoveClick(i)}
                      className="document-edit-block__table-content-row-action document-edit-block__table-content-row-action--danger"
                    >
                      <Delete />
                    </div>
                    <div className="block--width-070">
                      <Input
                        className="document-edit-block__input document-edit-block__textfield"
                        placeholder="Add additional charges or discount"
                      />
                    </div>
                    <div>
                      <Input
                        className="document-edit-block__input document-edit-block__textfield"
                        placeholder=""
                        value="0.00"
                      />
                    </div>
                  </div>
                </div>
              </div>
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
              {showTaxRow ? null : (
                <button
                  type="button"
                  className="btn btn--2 btn--secondary-blue btn--icon-left ml--0_5 "
                  onClick={() => handleTaxRow(true)}
                >
                  <Percent />
                  Add Taxes
                </button>
              )}
            </div>
          </Row>
        </div>
      </Row>
      <Row>
        <div className="document-layout__section">
          <div className="document-edit-block">
            <div className="document-edit-block__content">
              <label className="document-edit-block__label">
                Invoice Total (Incoterms&#174; 2020)
              </label>
              <div className="document-edit-block--inline">
                <div className="block--width-015">
                  <AsyncSelect
                    placeholder="-"
                    cacheOptions
                    loadOptions={loadOptions}
                    defaultOptions
                    onInputChange={handleInputChange}
                    isClearable={true}
                    styles={asyncSelectStyles}
                    className="document-edit-block__select"
                  />
                </div>
                <div>
                  <Input
                    className="document-edit-block__input document-edit-block__textfield"
                    placeholder="Place"
                  />
                </div>
                <div className="block--width-015">
                  <Input
                    className="document-edit-block__input document-edit-block__textfield"
                    placeholder="-"
                  />
                </div>
                <div className="block--width-030">
                  <div className="document-edit-block">
                    <div className="document-edit-block__total">
                      <span className="document-edit-block__total-symbol"></span>
                      <Input
                        className="document-edit-block__input"
                        disabled
                        value="0.00"
                      />
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
          <div className="document-edit-block">
            <div className="document-edit-block__content">
              <label className="document-edit-block__label2">
                Place and Date of Issue
              </label>
              <div className="document-edit-block--inline">
                <Input
                  className="document-edit-block__input document-edit-block__textfield"
                  placeholder="Place of issue"
                />
                <DatePicker
                  selected={startDate}
                  dateFormat="dd MMM yyyy"
                  onChange={handleChange}
                  className="document-edit-block__input document-edit-block__datefield"
                />
              </div>
            </div>
          </div>
        </div>
      </Row>
      <Row>
        <div className="document-layout__section">
          <div className="document-edit-block">
            <div className="document-edit-block__content">
              <label className="document-edit-block__label2">
                Signatory Company
              </label>
              <div className="document-edit-block--inline">
                <Input
                  className="document-edit-block__input document-edit-block__textfield"
                  placeholder="Place of issue"
                />
              </div>
            </div>
          </div>
        </div>
      </Row>
      <Row>
        <div className="document-layout__section">
          <div className="document-edit-block">
            <div className="document-edit-block__content">
              <label className="document-edit-block__label2">
                Name of Authorized Signatory
              </label>
              <div className="document-edit-block--inline">
                <Input
                  className="document-edit-block__input document-edit-block__textfield"
                  placeholder="First Name"
                />
                <Input
                  className="document-edit-block__input document-edit-block__textfield"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>
        </div>
      </Row>
      <Row>
        <div className="document-layout__section">
          <div className="document-edit-block">
            <div className="document-edit-block__content">
              <label className="document-edit-block__label2">Signature</label>
              <div className="document-edit-block--inline">
                <TextArea
                  value={value}
                  placeholder="Add Signature"
                  className="document-edit-block__input document-edit-block__textfield"
                  autoSize={{ minRows: 3, maxRows: 5 }}
                />
              </div>
            </div>
          </div>
        </div>
      </Row>
    </>
  );
};

export default AdditionalDetails;
