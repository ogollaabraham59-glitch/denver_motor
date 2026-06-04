import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import NavBarComponent from "./components/navBarComponent";
import HomeComponent from "./components/homeComponent";
import SignUpComponent from "./components/signUpComponent";
import SigninComponent from "./components/signInComponent";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AddProductComponent from "./components/addMotorsComponent";
import CarDetailsComponent from "./components/carDetailcomponent";
import ContactUsComponent from "./components/contactUsComponent";
import AdminDashboardComponent from "./components/adminDashboardComponent";
import CarListComponent from "./components/carListComponent";
import GetCarsComponent from "./components/getMotorsComponent";

function App() {
  return (
    <BrowserRouter>
      <NavBarComponent />

      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/signin" element={<SigninComponent />} />
          <Route path="/signup" element={<SignUpComponent />} />
          <Route path="/addproduct" element={<AddProductComponent />} />
          <Route path="/cardetails" element={<CarDetailsComponent />} />
          <Route path="/contactus" element={<ContactUsComponent />} />
          <Route path="/admindashboard" element={<AdminDashboardComponent />} />
          <Route path="/carlists" element={<CarListComponent />} />
          <Route path="/getcar" element={<GetCarsComponent />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;