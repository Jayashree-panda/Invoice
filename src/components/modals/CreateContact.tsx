/** React Components */
import React, { FC } from "react";
import { Row, Col, Input, Modal } from "antd";

/** Custom Styles */
import "antd/dist/antd.css";
import "../form.css";

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
  );
};

export default CreateContact
