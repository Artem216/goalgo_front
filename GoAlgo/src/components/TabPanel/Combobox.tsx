import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState } from "react";

import { IStocksNames } from "../../app/models/IStocksNames.ts";

import { UserApiServiceInstance } from "../../app/UserApiService.ts";

export default function ComboBox() {
  const stocks: IStocksNames[] = [
    {
      label: "Agilent TechnologiesORD SHS",
      code: "A-RM",
      group: "stock_shares",
    },
    {
      label: "BlackRock Inc.",
      code: "BLK-RM",
      group: "stock_shares",
    },
    {
      label: "American International ORD SHS",
      code: "AIG-RM",
      group: "stock_shares",
    },
    {
      label: "Ашинский метзавод ПАО ао",
      code: "AMEZ",
      group: "stock_shares",
    },
  ];
  // const [stocks, setStocks] = useState<IStocksNames[]>();

  // useEffect(() => {
  //   const fetchStocksData = async () => {
  //     UserApiServiceInstance.getAllStocks().then((stock) => {
  //       console.log(stock);
  //       setStocks(stock);
  //     });
  //   };
  //   fetchStocksData();
  // }, []);
  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={stocks}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} />}
      />
    </>
  );
}
