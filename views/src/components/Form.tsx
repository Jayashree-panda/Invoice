/** React Components */
import React, { FC, useState } from "react";
import { Row, Col, Button } from "antd";
import axios from "axios";
import { saveAs } from "file-saver";

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
import { HOST } from "../utils/utils";

const Form: FC<{}> = () => {
  const [createContact, setCreateContact] = useState(false);
  const [formState, setFormState] = useState({
    seller: "",
    quoteNumber: "",
    invoiceDate: "",
    buyer: "",
    methodOfDispatch: "",
    typeOfShipment: "",
    portOfLoading: "",
    portOfDischarge: "",
    paymentMethod: "",
    additionalInformation: "",
  });

  const handleCreateContact = (cond: boolean) => {
    setCreateContact(cond);
  };

  const addFormValues = (type: string, value: any) => {
    const obj2 = { type: type, value: value };
    setFormState({ ...formState, [type]: value });
  };

  const submit = () => {
    console.log(" formState v: ", formState);
     axios
       .post(`${HOST}/create-pdf`, formState)
       .then(() => axios.get(`${HOST}/fetch-pdf`, { responseType: "blob" }))
       .then((res) => {
         const pdfBlob = new Blob([res.data], { type: "application/pdf" });
         saveAs(pdfBlob, "newPdf.pdf");
       });
    console.log("Submitted");
  };

  return (
    <div id="divToPrint" className="document-edit-view">
      <Heading />
      {createContact ? (
        <CreateContact
          openCreate={createContact}
          closeCreate={() => handleCreateContact(false)}
        />
      ) : null}
      <form noValidate autoComplete="off">
        <Row>
          <Col span={12}>
            <Seller
              showCreateContact={(cond) => handleCreateContact(cond)}
              getValues={(type, value) => addFormValues(type, value)}
            />
          </Col>
          <Col span={12}>
            <QuoteNumber
              // getInputFieldValues={(type, value) => addFormValues(type, value)}
              getValues={(type, value) => addFormValues(type, value)}
            />
          </Col>
        </Row>
        <Row style={{ height: "9rem" }}>
          <Col span={12}>
            <Buyer getValues={(type, value) => addFormValues(type, value)} />
          </Col>
          <Col span={12}>
            <div className="document-layout__section">
              <div className="document-edit-block__content drop-down_content-lg"></div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <MultipleMethods
              getValues={(type, value) => addFormValues(type, value)}
            />
          </Col>
          <Col span={12}>
            <PaymentMethod
              getValues={(type, value) => addFormValues(type, value)}
            />
          </Col>
        </Row>
        <ProductListTable />
        <Row>
          <Col span={12}>
            <AdditionalInformation
              getValues={(type, value) => addFormValues(type, value)}
            />
          </Col>
          <Col span={12}>
            <AdditionalDetails />
          </Col>
        </Row>
        <Button color="primary" onClick={() => submit()}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
