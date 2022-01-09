import React from "react";
import { Routes, Route } from "react-router-dom";

import Menu from "../Components/Menu";
import Footer from "../Components/Footer";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Container from "react-bootstrap/Container";

function Public() {
  return (
    <>
      <Menu />
      <Container>
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="*" exact element={<NotFound />}></Route>
          </Routes>
      </Container>
      <Footer />
    </>
  );
}
export default Public;
