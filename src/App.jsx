import { Route, Routes } from "react-router-dom";
import MenuPages from "./Pages/MenuPages";
import HomePages from "./Pages/HomePages";
import HeaderComponent from "./Component/HeaderComponent";
import FooterComponent from "./Component/FooterComponent";
import AboutPages from "./Pages/AboutPages";
import FaqPages from "./Pages/FaqPages";

function App() {
  return (
    <>
      <div>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/menu" element={<MenuPages />} />
          <Route path="/faq" element={<FaqPages />} />
          <Route path="/about" element={<AboutPages />} />
        </Routes>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
