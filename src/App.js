import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import NavBarComponent from "./components/navBarComponent";
import HomeComponent from "./components/homeComponent";
import SignUpComponent from "./components/signUpComponent";
import SigninComponent from "./components/signInComponent";
import ContactUsComponent from "./components/contactUsComponent";
import SearchComponent from "./components/searchComponent";
import CarsComponent from "./components/carsComponent";
import AddProductComponent from "./components/addProductComponent";
import GetProductComponent from "./components/getProductComponent";
import footerComponent from "./components/footerComponent";
import carlistComponent from "./components/carlistComponent";
import carDetailsComponent from "./components/carDetailsComponent";

import AdminDashboardComponent from "./components/adminDashboardComponent";


// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

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
          <Route path="/admindashboard" element={<AdminDashboardComponent />} />
          <Route path='/carsdetails/:product_id' element={<GetProductComponent />} />



        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;