import { Box, Button, Grid, TextField, Autocomplete } from "@mui/material";
import Navbar from "../components/Navbar";
import DataBox from "../components/DataBox";

import { useEffect, useState } from "react";

import axios from "axios";
import API_HOST from "../app/api/api";
import { User } from "../types";
import BuySellBlock from "../components/BuySellBlock";

export function UserCard() {
  const [editing, setEditing] = useState(false);
  const pageUser: User = {
    id: 1,
    email: "artemtsykanov22@gmail.com",
    first_name: "Артём",
    last_name: "Цыканов",
    balance: 1000000,
  };
  if (pageUser) {
    return (
      <div
        style={{
          marginTop: 3,
          marginLeft: 3,
          marginRight: 4,
          marginBottom: 3,
          width: "1300px",
          background: "#F3F4F6",
          borderRadius: "10px",
        }}
      >
        <div>
          <Box
            sx={{
              padding: 2,
              backgroundColor: "#ffffff14",
              textAlign: "center",
              width: "100%",
              borderRadius: 4,
            }}
          >
            <p
              style={{
                borderBottom: "2px solid #FF0508",
                paddingBottom: "2px",
                fontWeight: "700",
                fontSize: "30px",
                color: "black",
              }}
            >
              {pageUser.first_name + " " + pageUser.last_name}
            </p>
            <Grid container>
              <Grid item xs={6} sx={{ minWidth: "150" }}>
                <Box>
                  <p
                    style={{
                      fontWeight: "700",
                      fontSize: "30px",
                      color: "black",
                    }}
                  >
                    Баланс: {pageUser.balance}
                  </p>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Button
              onClick={() => {
                console.log("updating user");
                if (editing) {
                  // props.handleUserUpdate();
                  setPageUser({
                    ...pageUser,
                    // tg_username: telegramText!,
                  });
                  setEditing(false);
                } else {
                  setEditing(true);
                }
              }}
              sx={{
                mt: 2,
                padding: 2,
                backgroundColor: "#FF0508",
                // border: "1px solid #C059FF",
                color: "#FFF",
                width: "100%",
                fontSize: "14px",
                borderRadius: 4,
                "&:hover": {
                  backgroundColor: "#D78181",
                },
              }}
            >
              Отредактировать данные
            </Button>
          </Box>
        </div>
      </div>
    );
  } else {
    return <div>loading</div>;
  }
}

export default function Profile() {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Box className="profile">
          <UserCard />
        </Box>
        <BuySellBlock />
      </div>
    </>
  );
}
