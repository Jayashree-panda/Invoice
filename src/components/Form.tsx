import React, { FC, useState } from "react";
import { Row, Col, Input, Menu, Modal } from "antd";
import "antd/dist/antd.css";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import AsyncSelect from "react-select/async";
import Title from "antd/lib/typography/Title";
import TextArea from "antd/lib/input/TextArea";
import DatePicker from "react-datepicker";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
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
  { label: "Create Contact" }
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
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [createContact, setCreateContact] = useState(false);

  const onEditorStateChange = (editorState: React.SetStateAction<EditorState>) => {
    setEditorState(editorState);
  }

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

  const handleCreateContact = () => {
    setCreateContact(true)
  }

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

      <Modal
        title="Fill form"
        centered
        visible={createContact}
        onOk={() => setCreateContact(false)}
        onCancel={() => setCreateContact(false)}
        width={700}
      >
        <Row>
          <Col span={6}>Company Name</Col>
          <Col span={18}>
            <Input size="large" placeholder="Company" />
          </Col>
          <br />
        </Row>
        {/* <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
          <br /> */}
        <Row>
          <Col span={6}>Primary person</Col>
          <Col span={6}>
            <Input size="large" placeholder="First Name" />
          </Col>
          <Col span={6}>
            <Input size="large" placeholder="Last Name" />
          </Col>
        </Row>
        <Row>
          <Col span={6}>Email Address</Col>
          <Col span={18}>
            <Input size="large" placeholder="Email" />
          </Col>
        </Row>

        <Row>
          <Col span={6}>Street Address</Col>
          <Col span={18}>
            <Input size="large" placeholder="Address" />
          </Col>
        </Row>
        <Row>
          <Col span={6}></Col>
          <Col span={18}>
            <Input size="large" placeholder="" />
          </Col>
        </Row>
        <Row>
          <Col span={6}></Col>
          <Col span={18}>
            <Input size="large" placeholder="City" />
          </Col>
        </Row>
        <Row>
          <Col span={6}></Col>
          <Col span={18}>
            <Row>
              <Col span={9}>
                <Input size="large" placeholder="Postal/ZIP Code" />
              </Col>
              <Col span={9}>
                <Input size="large" placeholder="Country" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={6}>Contact Info:</Col>
          <Col span={18}>
            <Row>
              <Col span={9}>
                <Input size="large" placeholder="Telephone" />
              </Col>
              <Col span={9}>
                <Input size="large" placeholder="fax" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal>

      <Row>
        <Col span={12}>
          <div className="document-layout__section">
            <label className="document-edit-block__label">Seller</label>
            <div className="document-edit-block__content drop-down_content-lg">
              <AsyncSelect
                cacheOptions
                loadOptions={loadOptions}
                defaultOptions
                onInputChange={handleCreateContact}
                isClearable={true}
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
              <div className="document-layout__section">
                <div className="document-edit-block">
                  <label className="document-edit-block__label">
                    Quote Number
                  </label>
                  <div className="document-edit-block__content">
                    <div className="document-edit-block--inline">
                      <Input
                        className="document-edit-block__input document-edit-block__textfield"
                        // value="QUO-00001"
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
                    onChange={handleChange}
                    className="document-edit-block__input document-edit-block__datefield"
                  />
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
                isClearable={true}
                loadOptions={loadOptions}
                defaultOptions
                onInputChange={handleInputChange}
              />
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className="document-layout__section">
            <div className="document-edit-block__content drop-down_content-lg"></div>
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
                      isClearable={true}
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
                      isClearable={true}
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
              <Editor
                editorState={editorState}
                toolbarOnFocus
                toolbarClassName="document-edit-block__rich-text-editor-toolbar"
                wrapperClassName="document-edit-block__rich-text-editor-wrapper"
                editorClassName="document-edit-block__rich-text-editor-editor"
                toolbar={{
                  options: ["inline", "list", "textAlign"],
                  inline: {
                    options: ["bold", "italic", "underline"],
                  },
                  list: {
                    options: ["unordered", "ordered"],
                  },
                }}
                onEditorStateChange={onEditorStateChange}
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
              <Editor
                editorState={editorState}
                toolbarOnFocus
                toolbarClassName="document-edit-block__rich-text-editor-toolbar"
                wrapperClassName="document-edit-block__rich-text-editor-wrapper"
                editorClassName="document-edit-block__rich-text-editor-editor"
                toolbar={{
                  options: ["inline", "list", "textAlign"],
                  inline: {
                    options: ["bold", "italic", "underline"],
                  },
                  list: {
                    options: ["unordered", "ordered"],
                  },
                }}
                onEditorStateChange={onEditorStateChange}
              />
            </div>
          </div>
        </Col>
        <Col span={12}>
          <Row>
            <div className="document-layout__section">
              <div className="document-edit-block">
                <div className="document-edit-block__content">
                  <div className="document-edit-block--inline">
                    <div className="block--width-075">
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
                      <Input
                        className="document-edit-block__input document-edit-block__textfield"
                        placeholder="-"
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
                  <label className="document-edit-block__label2">
                    Signature
                  </label>
                  <div className="document-edit-block--inline">
                    <TextArea
                      value={value}
                      placeholder="Controlled autosize"
                      autoSize={{ minRows: 3, maxRows: 5 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default Form;
