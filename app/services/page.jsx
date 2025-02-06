import React from "react";
import Pages from "../components/pages";
import Services from "./Services";
import Footer from "../components/layout/Footer";

const page = () => {
  return (
    <Pages>
      <Services />
      <Footer />
    </Pages>
  );
};

export default page;
