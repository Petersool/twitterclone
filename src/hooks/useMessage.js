import { useEffect, useState } from "react";

function useMessage(id) {
  const [message, setMessage] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://twitter-backend-group5.herokuapp.com/messages/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setIsLoading(false);
        setMessage(json);
        console.log(json);
      })
      .catch(() => console.log("Request failed"));
  }, [id]);

  return [message, isLoading];
}
export default useMessage;
