import React, { Component } from 'react';
import { Row, Col, Button } from "antd";
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Row gutter={30}>
          <Col xs={24} md={12} lg={12}>
            <div>Picture</div>
          </Col>
          <Col xs={24} md={12} lg={12}>
            <div>
              Design
              <Button type="primary">Download</Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
