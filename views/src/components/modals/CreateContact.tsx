/** React Components */
import React, { FC,useState } from "react";
import { Row, Col, Input, Modal, Button } from "antd";

/** Custom Styles */
import "antd/dist/antd.css";
import "../styles/form.css";

interface CreateContactProps {
  openCreate: boolean,
  closeCreate: any
}

const CreateContact: FC<CreateContactProps> = ({ openCreate, closeCreate }) => {
  const [showAddress, setShowAddress] = useState<boolean>(true);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState<boolean>(false);
  return (
    <Modal
      title="Fill form"
      visible={openCreate}
      onOk={() => closeCreate(true)}
      onCancel={() => closeCreate(true)}
      width={800} 
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
      <div className ="buttons">
        <Row>
          <Col span={12}>
            <Button
              className="addressButton"
              onClick={() => {
                setShowAdditionalInfo(false);
                setShowAddress(true);
              }}
            >
              Address
            </Button>
          </Col>
          <Col span={12}>
            <Button
              className="additionalInfoButton"
              onClick={() => {
                setShowAddress(false);
                setShowAdditionalInfo(true);
              }}
            >
              Additional fields
            </Button>
          </Col>
        </Row>
      </div>
      {showAddress && (
        <div>
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
        </div>
      )}
      {showAdditionalInfo && (
        <div>
          <Row>
            <Col span={6}>
              <div className="div-element-title">Additional fields</div>
            </Col>

            <Col span={18}>
              <div className="div-element-modal">
                <Input
                  size="large"
                  placeholder="Additional field 1"
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
                  placeholder="Additional field 2"
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
                  placeholder="Additional field 3"
                  className="input-element-modal"
                />
              </div>
            </Col>
          </Row>
        </div>
      )}
    </Modal>
  );
};

export default CreateContact
