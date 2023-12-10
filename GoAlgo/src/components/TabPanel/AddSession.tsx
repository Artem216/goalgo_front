import ComboBox from "./Combobox";

import { useState } from "react";

import { API_URL } from "../../config";
import axios from "axios";
import authHeader from "../../utils/authHeaders";

import { Button, TextField } from "@mui/material";

function AddSession() {
  const [balance, setBallance] = useState("");
  const [selectedStock, setSelectedStock] = useState("");

  const handleStockSelect = (value) => {
    setSelectedStock(value);
  };

  const addBot = async () => {
    try {
      const response = await axios.post(
        API_URL + "/api/v1/trader/add_bot",
        {
          code: selectedStock,
          // balance: balance,
        },
        {
          headers: authHeader(),
        }
      );
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div>
        <p>Выберите актив</p>
        <ComboBox handleSelect={handleStockSelect} />
      </div>
      <div>
        <p>Бюджет Бота</p>
        <TextField
          id="outlined-basic"
          variant="outlined"
          sx={{ width: 300 }}
          value={balance}
          onChange={(event) => {
            setBallance(event.target.value);
          }}
        />
      </div>
      <Button
        type="submit"
        variant="contained"
        sx={{ mb: "25px", width: "300px", height: "56px", mt: 4 }}
        onClick={addBot}
      >
        Добавить
      </Button>
    </div>
  );
}

export default AddSession;
