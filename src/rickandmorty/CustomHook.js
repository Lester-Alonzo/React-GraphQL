import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { ESPESIFIC_CHAR } from "./rickmorty-querys";

export const usePeticion = () => {
  const [getChar, result] = useLazyQuery(ESPESIFIC_CHAR);
  const [name, setName] = useState("");
  const first = () => {
    getChar({ variables: { name: name, page: 1 } });
  };

  return {
    result,
    first,
    setName,
  };
};
