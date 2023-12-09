import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState } from "react";

import { IStocksNames } from "../../app/models/IStocksNames.ts";

import { UserApiServiceInstance } from "../../app/UserApiService.ts";

export default function ComboBox() {
  const [stocks, setStocks] = useState<IStocksNames[]>();

  useEffect(() => {
    const fetchStocksData = async () => {
      UserApiServiceInstance.getAllStocks().then((stock) => {
        console.log(stock);
        setStocks(stock);
      });
    };
    fetchStocksData();
  }, []);

  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={stocks.map((stock) => {
          stock.title;
        })}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </>
  );
}
