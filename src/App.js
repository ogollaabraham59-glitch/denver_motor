import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import NavBarComponent from "./components/navBarComponent";
import HomeComponent from "./components/homeComponent";
import SignUpComponent from "./components/signUpComponent";
import SigninComponent from "./components/signInComponent";
import GetProductComponent from "./components/getMotorsComponent";
import AddProductComponent from "./components/addMotorsComponent";
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


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;