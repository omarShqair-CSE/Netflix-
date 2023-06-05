import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import Movies from "./components/Movies/Movies";
import { Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route path="/Movies" element={<Movies />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>

        <Footer />
      </div>
    );
  }
}
