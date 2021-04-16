import React from "react";
import { useParams } from 'react-router-dom';

function Message() {
  const { id } = useParams()

  return (
    <div>{`message with id ${id}`}</div>
  );
}

export default Message;