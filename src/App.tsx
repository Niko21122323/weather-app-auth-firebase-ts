import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { AuthContextProvider } from "./context/AuthContex";
import ProtectedRoute from "./pages/ProtectedRoutes";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<SignUp />} />
        <Route
          path="/layout"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthContextProvider>
  );
};
export default App;
