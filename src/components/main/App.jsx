import React from "react";
import Logo from "../template/Logo";
import Footer from "../template/Footer";
import Main from "../template/Main";
import Header from "../template/Header";

import { BrowserRouter } from "react-router-dom";

export default (props) => (
  <BrowserRouter>
    <div className="container-fluid">
      <div className="row">
        <aside className="col-md-2 bg-light p-3">
          <Logo />
        </aside>
        <main className="col-md-10">
          <Header />
          <Main />
        </main>
      </div>
      <footer className="row">
        <div className="col-12">
          <Footer />
        </div>
      </footer>
    </div>
  </BrowserRouter>
);
