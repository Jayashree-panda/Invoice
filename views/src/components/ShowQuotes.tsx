import React, { useEffect, useState } from "react";
import { Table, Radio, Divider, Checkbox, Typography } from "antd";
import { HOST } from "../utils/utils";
import Title from "antd/lib/typography/Title";

const columns = [
  {
    title: "Seller",
    dataIndex: "seller",
    render: (text: React.ReactNode) => <a>{text}</a>,
  },
  {
    title: "Buyer",
    dataIndex: "buyer",
  },
  {
    title: "Quote Number",
    dataIndex: "quoteNumber",
  },
  {
    title: "Action"
  }
];

// const data = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park",
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     age: 42,
//     address: "London No. 1 Lake Park",
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//     address: "Sidney No. 1 Lake Park",
//   },
//   {
//     key: "4",
//     name: "Disabled User",
//     age: 99,
//     address: "Sidney No. 1 Lake Park",
//   },
// ];

interface ListDataProperties {
  seller: string;
  quoteNumber: string;
  invoiceDate: string;
  buyer: string;
  methodOfDispatch: string;
  typeOfShipment: string;
  portOfLoading: string;
  portOfDischarge: string;
  paymentMethod: string;
  additionalInformation: string;
}

const ShowQuotes = () => {
  const [data, setData] = useState<ListDataProperties[]>([]);

  useEffect(() => {
    async function fetchData(url: string) {
      const r = await fetch(url);
      const inJSON = await r.json();
      console.log(inJSON);

      var myData: ListDataProperties[] = Object.keys(inJSON).map((key: any) => {
        console.log(key);
        return inJSON[key];
      });
      console.warn(myData);

      setData(myData);
      console.log("data: ", data);
    }
    fetchData(`${HOST}/fetch-form-data`);
  }, []);

  return (
    <div style={{ margin: "10rem" }}>
      <Title level={3}>List of Quotes Created</Title>
      <Table
        rowSelection={{
          type: "checkbox",
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default ShowQuotes;
