import React from "react";
import Logo from "../template/Logo";
import Footer from "../template/Footer";
import Header from "../template/Header";
import UserCrud from "../user/UserCrud";

export default () => (
  <div className="container-fluid">
    <div className="row">
      <aside className="col-md-2 bg-light p-3">
        <Logo />
      </aside>
      <main className="col-md-10">
        <Header />
        <div className="d-flex justify-content-center">
          <UserCrud />
        </div>
      </main>
    </div>
    <footer className="row">
      <div className="col-12">
        <Footer />
      </div>
    </footer>
  </div>
);
