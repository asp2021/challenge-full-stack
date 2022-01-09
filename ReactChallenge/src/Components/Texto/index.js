import React from "react";
import { Card } from "react-bootstrap";

function Texto(props) {
  const { datos } = props;

  return (
    <Card
      style={{
        borderRadius: 12,
        margin: "5px",
        width: "22rem",
        background: "#F7F2F1",
      }}
    >
      <Card.Body>
        <Card.Text>{datos.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default Texto;
