import { useEffect, useState } from "react";

function useMessages() {
  const [messages, setMessages] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://twitter-backend-group5.herokuapp.com/messages/")
      .then((response) => response.json())
      .then((json) => {
        // setIsLoading(false);
        setMessages(json);
        console.log(json);
      })
      .catch(() => console.log("Request failed"));
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://pokeapi.co/api/v2/pokemon?limit=9")
  //     .then(function (response) {
  //       console.log(response);
  //       setPokemon(response.data.results);
  //     })
  //     .catch(function (error) {
  //       console.log("Request failed");
  //     });
  // }, []);

  return [messages];
}
export default useMessages;
