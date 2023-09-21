import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import CONTACTS from "./pages/CONTACTS";
import BOOKING from "./pages/BOOKING";
import ABOUT from "./pages/ABOUT";
import PORTFOLIO from "./pages/PORTFOLIO";
import LandingPage from "./pages/LandingPage";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/booking":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/portfolio":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<CONTACTS />} />
      <Route path="/booking" element={<BOOKING />} />
      <Route path="/about" element={<ABOUT />} />
      <Route path="/portfolio" element={<PORTFOLIO />} />
      <Route path="/landing-page" element={<LandingPage />} />
    </Routes>
  );
}
export default App;
