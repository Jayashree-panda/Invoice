import React, {FC} from 'react';
import { Divider, Row, Col, Input, Menu, Dropdown } from 'antd';
import 'antd/dist/antd.css';
import { DownOutlined } from '@ant-design/icons';

const divStyle = {
    marginLeft:'300px',
    marginRight: '300px',
    marginTop: '100px'
}

const inputStyle = {
    backgroundColor: 'pink',
    padding: '15px'
}

const inputStyle2 = {
    
}

const inputStyle3 = {
    padding:'20px'
}

const divinpStyle = {
    border: '1px solid black',
    padding: '30px'
}

const divinp2style = {
    border: '1px solid black',
    padding: '10px'
}

const divinp3style = {
    border: '1px solid black',
    padding: '4px'
}

const paraStyle1 = {
    border: '1px solid black'
}

const paraStyle2 ={
    
}
const vacant = {
    padding:'68px',
    border: '1px solid black'
}

const divStyle2 = {
    
    
}

const divStyle3 = {
    border: '1px solid black',
    padding:'10px'
}

const divStyle4 = {
  border: "1px solid black",
  padding: '7px',
  paddingBottom: '170px'
}

const divStyle5 = {
  padding: "32px",
  border: "1px solid black",
};

const inputStyle4 = {
  border: "1px solid black",
  padding: '10px'
};
const button1 = {
    
}

const button2 = {
    
}
const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
      </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
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

const Form: FC<{}> = () => {
    return (
      <div style={divStyle}>
        <Row>
          <Col span={12}>
            <div style={divinpStyle}>
              Seller
              <Input placeholder="Basic usage" style={inputStyle} />
            </div>
            <div style={divinpStyle}>
              Buyer
              <Input placeholder="Basic usage" style={inputStyle} />
            </div>
            <Row>
              <Col span={12}>
                <div style={divinp2style}>
                  Method of Dispatch
                  <Input placeholder="Basic usage" style={inputStyle2} />
                </div>
              </Col>
              <Col span={12}>
                <div style={divinp2style}>
                  Type of Shipment
                  <Input placeholder="Basic usage" style={inputStyle2} />
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <div style={divinp2style}>
                  Port of loading
                  <Input placeholder="Basic usage" style={inputStyle2} />
                </div>
              </Col>
              <Col span={12}>
                <div style={divinp2style}>
                  Port of discharge
                  <Input placeholder="Basic usage" style={inputStyle2} />
                </div>
              </Col>
            </Row>
            <div style={divStyle2}>
              <Row>
                <Col span={6} style={button1}>
                  <div style={divStyle3}>Product Code</div>
                </Col>
                <Col span={18} style={button2}>
                  <div style={divStyle3}>Description of Goods</div>
                </Col>
              </Row>
              <div style={divStyle4}>
                <Row>
                  <Col span={6}>
                    <Dropdown overlay={menu}>
                      <a
                        className="ant-dropdown-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        Hover me <DownOutlined />
                      </a>
                    </Dropdown>
                  </Col>
                  <Col span={18}>
                    <Input placeholder="Basic usage" />
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div style={paraStyle1}>
              <p style={paraStyle2}>Pages</p>
              <p style={paraStyle2}>1 of 1</p>
            </div>
            <Row>
              <Col span={12}>
                <div style={divinp3style}>
                  Quote Number
                  <Input placeholder="Basic usage" />
                </div>
              </Col>
              <Col span={12}>
                <div style={divinp3style}>
                  Date
                  <Input placeholder="Basic usage" />
                </div>
              </Col>
            </Row>
            <div style={vacant}></div>
            <div style={divStyle5}>
              Method of Payment
              <Input placeholder="Basic usage" style={inputStyle3} />
            </div>
            <Row>
                
                    <Col span={6} style = {inputStyle4}>
                        Unit Quantity
                    </Col>
                
                    <Col span={6} style = {inputStyle4}>
                        Unit Type
                    </Col>
                    <Col span={6} style = {inputStyle4}>
                        Amount
                    </Col>
                    <Col span={6} style = {inputStyle4}>
                        Price
            
                    </Col>
            </Row>
            <Row>
              <Col span={6}>
                
                <Input placeholder="Basic usage" />
              </Col>
              <Col span={6}>
               
                <Input placeholder="Basic usage" />
              </Col>
              <Col span={6}>
                
                <Input placeholder="Basic usage" />
              </Col>
              <Col span={6}>
                
                <Input placeholder="Basic usage" />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
}
export default Form;