import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main";
import ContactInfo from "./pages/ContactInfo";
import ContactForm from "./pages/ContactForm";
import "./App.css";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/contactinfos" element={<ContactInfo />} />
      <Route path="/contact" element={<ContactForm />} />
    </Routes>
  </Router>
);

export default App;
