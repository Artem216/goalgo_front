import React from "react";
import ComboBox from "./Combobox";

import { Button, TextField } from "@mui/material";

function AddSession() {
  return (
    <div>
      <div>
        <p>Выберите актив</p>
        <ComboBox />
      </div>
      <div>
        <p>Бюджет Бота</p>
        <TextField id="outlined-basic" variant="outlined" sx={{ width: 300 }} />
      </div>
      <Button
        variant="contained"
        sx={{ mb: "25px", width: "300px", height: "56px", mt: 4 }}
      >
        Добавить
      </Button>
    </div>
  );
}

export default AddSession;
