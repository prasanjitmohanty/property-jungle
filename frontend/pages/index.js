/* /pages/index.js */
import React, { useState } from "react";

import { Col, InputGroup, FormControl, Row } from "react-bootstrap";
import PlotList from "../components/PlotList";

function Home() {
  const [query, updateQuery] = useState("");
  return (
    <div className="container-fluid">
      <Row>
        <Col>
          <div className="mb-3">
            <InputGroup>
              <InputGroup.Text id="lblSearch"> Search </InputGroup.Text>
              <FormControl
                placeholder="Search Property"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={e => updateQuery(e.target.value.toLocaleLowerCase())}
                value={query}
              />
            </InputGroup>
          </div>
          <PlotList search={query} />
        </Col>
      </Row>
      <style jsx>
        {`
          .search {
            margin: 20px;
            width: 500px;
          }
        `}
      </style>
    </div>
  );
}
export default Home;