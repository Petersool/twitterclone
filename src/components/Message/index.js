import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import "./style.css";

function Message({ message, getSelectedMessage }, key) {
  return (
    <Card key={key} className=" shadow p-3 mb-5 bg-primary rounded-lg">
      <CardBody>
        <div className="card-content-top">
          <CardTitle tag="h3" className="text-third">
            {message.date}
          </CardTitle>

          {/* style={{fontSize: "24px"}} */}
          <CardText>{message.body}</CardText>
        </div>
      </CardBody>
    </Card>
  );
}

export default Message;
