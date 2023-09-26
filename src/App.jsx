import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Container } from "reactstrap";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Logout from "./components/Logout";
import { ToastContainer } from "react-toastify";
import { Protector } from "./helpers";
import Gallery from './components/pages/Gallery'

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Protector Component={Home} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </Container>
  );
}

export default App;