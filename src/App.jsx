import "./App.css";
import "./styles/NavMenu.css";
import "./styles/Secondpage.css";
import "./styles/Thirdpage.css";
import "./styles/Blog.css";
import "./styles/Footer.css";

import NavMenu from "./components/NavMenu";
import SecondPage from "./components/Secondpage";
import ThirdPage from "./components/ThirdPage";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavMenu />
      <SecondPage />
      <ThirdPage />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
