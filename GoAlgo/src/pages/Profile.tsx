import { Box, Button, Grid, TextField, Autocomplete } from "@mui/material";
import Navbar from "../components/Navbar";

import { useEffect, useState } from "react";

import { User } from "../types";
import BuySellBlock from "../components/BuySellBlock";

import { UserApiServiceInstance } from "../app/UserApiService";

import TabPanel from "../components/TabPanel";

export function UserCard() {
  const [editing, setEditing] = useState(false);

  const [loading, setLoading] = useState<boolean>(true);
  const [pageUser, setPageUser] = useState<User>();

  useEffect(() => {
    const fetchActivityData = async () => {
      const data = await UserApiServiceInstance.getUserData();
      setPageUser(data);
      setLoading(false);
    };
    fetchActivityData();
  }, []);

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
              textAlign: "start",
              width: "100%",
              borderRadius: 4,
            }}
          >
            <p
              style={{
                borderBottom: "2px solid #FF0508",
                paddingBottom: "2px",
                fontSize: "30px",
                fontWeight: "200",
                lineHeight: "normal",
                fontFamily: "Roboto, sans-serif",
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
                      fontSize: "40px",
                      fontWeight: "200",
                      lineHeight: "normal",
                      fontFamily: "Roboto, sans-serif",
                      color: "black",
                    }}
                  >
                    Баланс: {pageUser.balance} ₽
                  </p>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box>
            {/* <Button
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
            </Button> */}
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
        <Box
          className="profile"
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <UserCard />
          <TabPanel />
        </Box>
        <BuySellBlock />
      </div>
    </>
  );
}
