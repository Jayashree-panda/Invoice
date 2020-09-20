/** React Components */
import React, { FC } from "react";
import { Row, Col, Input, Modal } from "antd";

/** Custom Styles */
import "antd/dist/antd.css";
import "../styles/form.css";

interface CreateContactProps {
  openCreate: boolean,
  closeCreate: any
}

const CreateContact: FC<CreateContactProps> = ({ openCreate, closeCreate }) => {

  return (
    <Modal
      title="Fill form"
      centered
      visible={openCreate}
      onOk={() => closeCreate(true)}
      onCancel={() => closeCreate(true)}
      width={700}
    >
      <Row>
        <Col span={6}>
          <div className="div-element-title">Company Name</div>
        </Col>
        <Col span={18}>
          <div className="div-element-modal">
            <Input
              size="large"
              placeholder="Company"
              className="input-element-modal"
            />
          </div>
        </Col>
      </Row>

      {/* <Checkbox.Gr
      oup options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
          <br /> */}

      <Row>
        <Col span={6}>
          <div className="div-element-title">Primary person</div>
        </Col>

        <Col span={6}>
          <div className="div-element-modal">
            <Input
              size="large"
              placeholder="First Name"
              className="input-element-modal"
            />
          </div>
        </Col>
        <Col span={6}>
          <div className="div-element-modal">
            <Input
              size="large"
              placeholder="Last Name"
              className="input-element-modal"
            />
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={6}>
          <div className="div-element-title">Email Address</div>
        </Col>
        <Col span={18}>
          <div className="div-element-modal">
            <Input
              size="large"
              placeholder="Email"
              className="input-element-modal"
            />
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={6}>
          <div className="div-element-title">Street Address</div>
        </Col>

        <Col span={18}>
          <div className="div-element-modal">
            <Input
              size="large"
              placeholder="Address"
              className="input-element-modal"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <div className="div-element-title"></div>
        </Col>

        <Col span={18}>
          <div className="div-element-modal">
            <Input
              size="large"
              placeholder=""
              className="input-element-modal"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <div className="div-element-title"></div>
        </Col>
        <Col span={18}>
          <div className="div-element-modal">
            <Input
              size="large"
              placeholder="City"
              className="input-element-modal"
            />
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={6}>
          <div className="div-element-title"></div>
        </Col>

        <Col span={18}>
          <Row>
            <Col span={9}>
              <div className="div-element-modal">
                <Input
                  size="large"
                  placeholder="Postal/ZIP Code"
                  className="input-element-modal"
                />
              </div>
            </Col>
            <Col span={9}>
              <div className="div-element-modal">
                <Input
                  size="large"
                  placeholder="Country"
                  className="input-element-modal"
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col span={6}>
          <div className="div-element-title">Contact Info:</div>
        </Col>
        <Col span={18}>
          <Row>
            <Col span={9}>
              <div className="div-element-modal">
                <Input
                  size="large"
                  placeholder="Telephone"
                  className="input-element-modal"
                />
              </div>
            </Col>
            <Col span={9}>
              <div className="div-element-modal">
                <Input
                  size="large"
                  placeholder="fax"
                  className="input-element-modal"
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Modal>
  );
};

export default CreateContact
