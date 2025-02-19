/** React Components */
import { Row, Col, Input } from "antd";
import React, { FC, useState } from "react";
import DatePicker from "react-datepicker";

/** Custom CSS */
import "../styles/form.css";
import "antd/dist/antd.css";
import "react-datepicker/dist/react-datepicker.css";

interface QuoteNumberProps {
  getValues(type: string, x: any): void;
  // getInputFieldValues(type: string, x: any): void;
}

const QuoteNumber: FC<QuoteNumberProps> = ({
  getValues,
  // getInputFieldValues,
}) => {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date: Date | [Date, Date] | null) => {
    if (date instanceof Date) {
      setStartDate(date);
    }
  };

  return (
    <>
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
          <div className="document-layout__section">
            <div className="document-edit-block">
              <label className="document-edit-block__label">Quote Number</label>
              <div className="document-edit-block__content">
                <div className="document-edit-block--inline">
                  <Input
                    className="document-edit-block__input document-edit-block__textfield"
                    onChange={(e) => getValues("quoteNumber", e.target.value)}
                    name="QuoteNumber"
                  />
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className="document-edit-block document-layout__section">
            <label className="document-edit-block__label">Date</label>
            <div className="document-edit-block__content">
              <DatePicker
                selected={startDate}
                dateFormat="dd MMM yyyy"
                onChange={(valDate) => {getValues("invoiceDate", valDate);
                handleChange(valDate)}}
                className="document-edit-block__input document-edit-block__datefield"
              />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default QuoteNumber;
