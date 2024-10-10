import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Error403 from "./Error403";

const Dashboard = lazy(() => import("./Dashboard"));

const App = () => {
  return (
      <AuthProvider>
          <Router>
              <Suspense fallback={<div>Loading...</div>}>
                  <Routes>
                      <Route path="/" element={
                          <ProtectedRoute>
                              <Dashboard />
                          </ProtectedRoute>
                      } />
                      <Route path="/403" element={<Error403 />} />
                  </Routes>
              </Suspense>
          </Router>
      </AuthProvider>
  );
};

export default App;