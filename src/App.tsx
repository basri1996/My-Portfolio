import GlobalStyles from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./defaultTheme";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import ReactJs from "./pages/ReactJs";
import ReactNative from "./pages/ReactNative";
import Dom from "./pages/Dom";
import Home from "./pages/Home";
import { ProjectContextProvider } from "../src/ProjectContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ProjectContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reactjs" element={<ReactJs />} />
          <Route path="/reactnative" element={<ReactNative />} />
          <Route path="/dom" element={<Dom />} />
        </Routes>
        <Footer />
      </ProjectContextProvider>
    </ThemeProvider>
  );
}

export default App;
