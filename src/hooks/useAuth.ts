import { useContext } from "react"; // Compartilhando informações entre componentes
import { AuthContext } from "../contexts/AuthContext";

export function useAuth() {
  const value = useContext(AuthContext);
  return value;
}