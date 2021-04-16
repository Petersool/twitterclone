import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import "./style.css";

function Message({ message, getSelectedMessage }, key) {
  return (
    <Card
      key={key}
      onClick={getSelectedMessage}
      className=" shadow p-3 mb-5 bg-primary rounded-lg"
    >
      <CardBody>
        <div className="card-content-top">
          <CardTitle tag="h5" className="text-third">
            {message.date}
          </CardTitle>

          {/* style={{fontSize: "24px"}} */}
          <CardText tag="h6">{message.body}</CardText>
        </div>
      </CardBody>
    </Card>
  );
}

export default Message;
