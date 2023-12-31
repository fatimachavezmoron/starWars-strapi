import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Container } from "reactstrap";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Logout from "./components/Logout";
import { ToastContainer } from "react-toastify";
import { Protector } from "./helpers";
import Gallery from './components/pages/Gallery'
import Footer from "./components/pages/Footer";
import CustomNav from "./components/CustomNav";
import Ships from './components/pages/Ships';
import Upload from "./components/pages/Upload";
import UploadFiles from "./components/Upload";

function App() {
  return (
    <Container >
      <BrowserRouter>
      <CustomNav />
        <Routes>
          <Route path="/" element={<Protector Component={Home} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/ships" element={<Ships />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/products" element={<UploadFiles />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </Container>
  );
}

export default App;