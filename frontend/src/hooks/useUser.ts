import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("No context found.");
  }

  return context;
};

export default useUser;
