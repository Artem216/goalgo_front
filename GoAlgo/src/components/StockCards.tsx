import { useEffect, useState } from "react";
import axios from "axios";
import Marquee from "react-fast-marquee";

function StockCards() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const apiUrl =
      "https://iss.moex.com/iss/datashop/algopack/eq/tradestats/.json?latest=1";
    axios.get(apiUrl).then((response) => {
      console.log(response.data.data.data);
      const allStocks = response.data.data.data;
      setStocks(allStocks);
    });
  }, []);

  return (
    <div>
      <Marquee pauseOnHover={true} style={{ borderRadius: "8px" }}>
        {stocks.map((stock) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              background: "#000000",
              color: stock[12] < 0 ? "#FF0000" : "#00FF00",
              height: "60px",
              width: "180px",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            <div
              className="stockName"
              style={{ color: "rgba(255, 255, 255, 0.912)", fontSize: "20px" }}
            >
              {stock[2]}
            </div>
            <div style={{ display: "flex" }}>
              <div
                className="stockPrClose"
                style={{
                  color: " rgba(255, 255, 255, 0.912)",
                  fontSize: "20px",
                }}
              >
                {stock[6]}
              </div>
              <div
                className="stockPrChange"
                style={{ paddingLeft: "10px", fontSize: "20px" }}
              >
                {stock[12]}
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
export default StockCards;
