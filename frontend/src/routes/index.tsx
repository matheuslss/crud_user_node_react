import { Routes, Route } from "react-router-dom";
import UserList from "../pages/List";
import UserSignup from "../pages/Signup";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/signup" element={<UserSignup />} />
    </Routes>
  );
}
