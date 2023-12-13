import React, { useEffect, useState } from "react";

import { Button } from "@mui/material";

import axios from "axios";
import { API_URL } from "../../config";
import authHeader from "../../utils/authHeaders";

export interface botSession {
  instrument_code: string;
  start_balance: string;
  status: boolean;
  current_balance: string;
  in_stock: string;
}

function Sessions() {
  const [loading, setLoading] = useState(true);
  const [userBotSessions, setUserBotSessions] = useState<botSession[]>([]);
  const [activeStates, setActiveStates] = useState<boolean[]>([]);

  const fetchBotSessions = async () => {
    try {
      const response = await axios.get(
        `${API_URL}/api/v1/trader/get_all_user_bots`,
        {
          headers: authHeader(),
        }
      );
      setUserBotSessions(response.data);
      setActiveStates(response.data.map(() => false));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBotSessions();
  }, []);

  // useEffect(() => {

  // }, );
  // const [loading, setLoading] = useState(true);
  // const [userBotSessions, setUserBotSessions] = useState<botSession[]>([]);
  // const [activeStates, setActiveStates] = useState<boolean[]>([]);

  // const fetchBotSessions = async () => {
  //   try {
  //     const response = await axios.get(
  //       API_URL + "/api/v1/trader/get_all_user_bots",
  //       {
  //         headers: authHeader(),
  //       }
  //     );
  //     console.log(response.data);
  //     setUserBotSessions(response.data);
  //     setActiveStates(response.data.map(() => false));
  //     setLoading(false);
  //   } catch (error) {
  //     console.error(error);
  //     setLoading(false);
  //   }
  // };

  // const postData = async (instrumentCode) => {
  //   try {
  //     const response = await axios.post(
  //       `${API_URL}/api/v1/trader/user_deals_by_instrument`,
  //       {
  //         instrument_code: instrumentCode,
  //       },
  //       {
  //         headers: authHeader(),
  //       }
  //     );

  //     const lastDeal = response.data[response.data.length - 1];
  //     if (lastDeal.deal_type === "buy") {
  //       const updatedSessions = userBotSessions.map((session: botSession) => {
  //         if (session.instrument_code === instrumentCode) {
  //           // Обновляем поле current_balance
  //           return updateCurrentBalance(session, lastDeal.new_balance);
  //         }
  //         return session;
  //       });

  //       // Обновляем состояние userBotSessions
  //       setUserBotSessions(updatedSessions);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchBotSessions();
  // }, []);

  // const updateCurrentBalance = (session: botSession, newBalance: number) => {
  //   const updatedSession = { ...session, current_balance: newBalance };
  //   return updatedSession;
  // };

  // userBotSessions.forEach((session) => {
  //   const { instrument_code } = session;
  //   postData(instrument_code);
  // });

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleBotStatus = (index: number) => {
    setActiveStates((prevState) => {
      const updatedStates = [...prevState];
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    });
  };

  return (
    <div>
      <div
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: "Roboto, sans-serif",
          marginBottom: "20px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <div style={{ flex: "1" }}>Акция</div>
        <div style={{ flex: "1" }}>Баланс</div>
        <div style={{ flex: "1" }}>Прибыль</div>
        <div style={{ flex: "1" }}></div>
      </div>
      {userBotSessions.map((card, index) => {
        const isActive = activeStates[index]; // Получаем текущее состояние для каждой сессии бота
        return (
          <div
            style={{
              background: "#f2f2f2",
              display: "flex",
              flexDirection: "column",
              padding: "20px",
              marginBottom: "20px",
              borderRadius: "8px",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                fontSize: "18px",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: "20px",
                paddingRight: "20px",
                marginTop: "10px",
              }}
            >
              <div style={{ flex: "1", fontWeight: "bold", fontSize: "20px" }}>
                {card.instrument_code}
              </div>
              {/* <div style={{ flex: "1" }}>{card.stock}</div> */}
              <div style={{ flex: "1", marginLeft: "20px" }}>
                {parseFloat(card.current_balance) + parseFloat(card.in_stock)}
              </div>
              <div
                style={{
                  color:
                    parseFloat(card.current_balance) +
                      parseFloat(card.in_stock) -
                      parseFloat(card.start_balance) <
                    0
                      ? "red"
                      : "green",
                  flex: "1",
                  marginLeft: "20px",
                }}
              >
                {parseFloat(card.current_balance) +
                  parseFloat(card.in_stock) -
                  parseFloat(card.start_balance)}
              </div>
              <div style={{ flex: "1" }}>
                <Button
                  variant="contained"
                  onClick={() => handleBotStatus(index)}
                >
                  {isActive ? "Остановить" : "Старт"}
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Sessions;
