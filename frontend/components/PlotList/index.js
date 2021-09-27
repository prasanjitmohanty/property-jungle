/* components/PlotList/index.js */
//import { useQuery } from "@apollo/react-hooks";
// import { gql } from "apollo-boost";
import { gql, useQuery } from "@apollo/client";

import Link from "next/link";

import {
  Card,
  Row,
  Col
} from "react-bootstrap";

const QUERY = gql`
  {
    plots {
      id
      Title
      Area
      Price
      ProjectName
      ImageUrls
    }
  }
`;

function PlotList(props) {
  const { loading, error, data } = useQuery(QUERY);
  if (error) return "Error loading plots";
  //if plots are returned from the GraphQL query, run the filter query
  //and set equal to variable restaurantSearch
  if (loading) return <h1>Fetching</h1>;
  if (data.plots && data.plots.length) {
    //searchQuery
    const searchQuery = data.plots.filter((query) =>
      query.Title.toLowerCase().includes(props.search)
    );
    if (searchQuery.length != 0) {
      return (
        <Row>
          {searchQuery.map((res) => (
            <Col xs="6" sm="4" key={res.id}>
              <Card style={{ width: '18rem'}}>
                <Card.Img
                  top={true}
                  style={{ height: 250 }}
                  src={res.ImageUrls}
                />
                <Card.Body>
                  <Card.Title>{res.Title}</Card.Title>
                  <Card.Text>Plot Area: {res.Area} sqft</Card.Text>
                  <Card.Text>Price: Rs {res.Price}</Card.Text>
                </Card.Body>
                <div className="card-footer">
                  <Link
                    as={`/plots/${res.id}`}
                    href={`/plots?id=${res.id}`}
                  >
                    <a className="btn btn-primary">View</a>
                  </Link>
                </div>
              </Card>
            </Col>
          ))}

          <style jsx global>
            {`
              a {
                color: white;
              }
              a:link {
                text-decoration: none;
                color: white;
              }
              a:hover {
                color: white;
              }
              .card-columns {
                column-count: 3;
              }
            `}
          </style>
        </Row>
      );
    } else {
      return <h1>No Plots Found</h1>;
    }
  }
  return <h5>Add Plot</h5>;
}
export default PlotList;