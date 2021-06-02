import React from "react";
import { Router } from "@reach/router";
import Loadable from '@loadable/component';

// import Slide from "../components/Slide";
import Footer from "../components/Footer";
import Header from "../components/Header";

import GlobalStyles from "../globalStyles";

const Home = Loadable(() => import(`../components/Home`));

const MainRouter = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Router>
        <Home path="/" />
      </Router>
      <Footer />
      {/* <Slide title="" src=""/> */}
    </>
  );
};

export default MainRouter;
