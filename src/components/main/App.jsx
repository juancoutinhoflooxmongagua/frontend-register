import React from "react";
import Logo from "../template/Logo";
import Footer from "../template/Footer";
import Header from "../template/Header";
import UserCrud from "../user/UserCrud";

export default (props) => (
    <div className="container-fluid">
      <div className="row">
        <aside className="col-md-2 bg-light p-3">
          <Logo />
        </aside>
        <main className="col-md-10">
          <Header />
          <UserCrud></UserCrud>
        </main>
      </div>
      <footer className="row">
        <div className="col-12">
          <Footer />
        </div>
      </footer>
    </div>
);
