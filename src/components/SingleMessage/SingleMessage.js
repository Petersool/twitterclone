import React from "react";
import { useParams } from 'react-router-dom';

function SingleMessage() {
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://twitter-backend-group5.herokuapp.com/messages/${id}`)
      .then((response) => response.json())
      .then((json) => {
        // setIsLoading(false);
        setMessages(json);
        console.log(json);
      })
      .catch(() => console.log("Request failed"));
  }, []);
}

export default SingleMessage;