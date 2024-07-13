import ContactUsButton from "./contactus";
import SignUpButton from "./signup";
import HomepageButton from "./home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./aboutus";
import Catalog from "./catalog";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomepageButton />}></Route>
        <Route path="/signup" element={<SignUpButton />}></Route>
        <Route path="/contactus" element={<ContactUsButton />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

App.js

