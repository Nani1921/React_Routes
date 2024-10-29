// src/routes/AppRouter.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Booking from "../pages/Contact";
import Confirmation from "../pages/Confirmation";
import Users from "../pages/Users";
import UserDetail from "../components/UserDetails";
import NotFound from "../pages/NotFound";
import { UserContext, UserProvider } from "../context/UserContext";


const AppRouter = () => {
  return (
    <>
      <Router>
        <MainLayout>
          <UserProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Booking />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/users" element={<Users />}>
                <Route path=":userId" element={<UserDetail />} />
              </Route>
              <Route path="*" element={<NotFound />} />  
          </Routes>
          
          </UserProvider>
        </MainLayout>
      </Router>
    </>
  );
};

export default AppRouter;