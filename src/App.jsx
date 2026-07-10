import Cursor from "./components/common/Cursor";
import Loader from "./components/common/Loader";
import Home from "./pages/Home";
import ScrollToTop from "react-scroll-to-top";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      {/* <Cursor /> */}
      <Loader />

      <Home />

      <ScrollToTop smooth color="#4E342E" />

      <Helmet>
        <title>Rohit Lomga</title>

        <meta
          name="description"
          content="Frontend Developer portfolio built with React, Tailwind CSS and modern technologies."
        />

        <meta
          name="keywords"
          content="React, JavaScript, Tailwind CSS, Portfolio"
        />
      </Helmet>
    </>
  );
}

export default App;
