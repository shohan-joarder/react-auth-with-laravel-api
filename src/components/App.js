import Login from "./pages/auth/Login";
import { AuthProvider } from "./contex/AuthContex";
import FrontendLayout from "./FrontendLayout";
import Home from "./pages/Home";
import Profile from "./pages/private/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import TestContext from "./pages/private/TestContext";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <FrontendLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/" element={<PublicRoute />}>
                <Route path="/login" element={<Login />} />
              </Route>
              {/* private route start here */}
              <Route path="/" element={<PrivateRoute />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/test-context" element={<TestContext />} />
              </Route>
              {/* private route end here */}
            </Routes>
          </FrontendLayout>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
