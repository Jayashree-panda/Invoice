/** React Components */
import React, { FC, useState } from "react";
import { Row, Col } from "antd";

/** Custom Styles */
import "./styles/form.css";
import "antd/dist/antd.css";

/** Sub Components */
import Seller from "./sub-components/Seller";
import QuoteNumber from "./sub-components/QuoteNumber";
import Buyer from "./sub-components/Buyer";
import MultipleMethods from "./sub-components/MultipleMethods";
import PaymentMethod from "./sub-components/PaymentMethod";
import ProductListTable from "./sub-components/ProductListTable";
import AdditionalInformation from "./sub-components/AdditionalInformation";
import AdditionalDetails from "./sub-components/AdditionalDetails";
import Heading from "./sub-components/Heading";
import CreateContact from "./modals/CreateContact";

const Form: FC<{}> = () => {
  const [createContact, setCreateContact] = useState(false);

  const handleCreateContact = (cond: boolean) => {
    setCreateContact(cond);
  };
  return (
    <div className="document-edit-view">
      <Heading />
      <CreateContact
        openCreate={createContact}
        closeCreate={() => handleCreateContact(false)}
      />
      <Row>
        <Col span={12}>
          <Seller showCreateContact={() => handleCreateContact(true)} />
        </Col>
        <Col span={12}>
          <QuoteNumber />
        </Col>
      </Row>
      <Row style={{ height: "9rem" }}>
        <Col span={12}>
          <Buyer />
        </Col>
        <Col span={12}>
          <div className="document-layout__section">
            <div className="document-edit-block__content drop-down_content-lg"></div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <MultipleMethods />
        </Col>
        <Col span={12}>
          <PaymentMethod />
        </Col>
      </Row>
      <ProductListTable />
      <Row>
        <Col span={12}>
          <AdditionalInformation />
        </Col>
        <Col span={12}>
          <AdditionalDetails />
        </Col>
      </Row>
    </div>
  );
};

export default Form;
