import { Route, Routes, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Signin from "./Signin";
import store from "../project/store";
import { Provider } from "react-redux";
import CurrentUser from "../project/users/currentUser";
import ProtectedRoute from "./ProtectedRoute";

function Kanbas() {
  return (
    <Provider store={store}>
      <CurrentUser>
        <div className="d-flex">
          <KanbasNavigation />
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route
                path="Account"
                element={
                  <ProtectedRoute>
                    <Account />
                  </ProtectedRoute>
                }
              />
              <Route
                path="Dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="Courses/:courseId/*"
                element={
                  <ProtectedRoute show={true}>
                    <Courses />
                  </ProtectedRoute>
                }
              />
              <Route path="Calendar" element={<h1>Calendar</h1>} />
              <Route path="Signin" element={<Signin />} />
            </Routes>
          </div>
        </div>
      </CurrentUser>
    </Provider>
  );
}
export default Kanbas;
