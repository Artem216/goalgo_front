import React from "react";

import ResponsiveAppBar from "../components/Navbar";
import StockCards from "../components/StockCards";

function Main() {
  return (
    <div>
      <ResponsiveAppBar />
      <StockCards />
    </div>
  );
}

export default Main;
