import React, { useEffect, useState } from "react";

import { Button } from "@mui/material";

import axios from "axios";
import { API_URL } from "../../config";

//   const userBotSessions: botSession[] = [
//     {
//       id: 1,
//       botName: "Алгобот1",
//       stock: "MTSS",
//       sessionBalance: 10000,
//       sessionProfit: 15,
//       isActive: true,
//     },
//     {
//       id: 2,
//       botName: "Алгобот2",
//       stock: "MTSS",
//       sessionBalance: 12000,
//       sessionProfit: 25,
//       isActive: true,
//     },
//     {
//       id: 3,
//       botName: "Алгобот3",
//       stock: "MTSS",
//       sessionBalance: 14000,
//       sessionProfit: -15,
//       isActive: false,
//     },
//   ];

interface botSession {
  id: number;
  botName: string;
  stock: string;
  sessionBalance: number;
  sessionProfit: number;
  isActive: boolean;
}

function Sessions() {
  const [userBotSessions, setUserBotSessions] = useState<botSession[]>([]);

  const fetchBotSessions = async () => {
    try {
      const response = await axios.get(
        API_URL + "/api/v1/trader/instrument_all"
      );
      console.log(response.data);
      setUserBotSessions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBotSessions();
  }, []);

  if (userBotSessions.length > 0) {
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
          <div style={{ flex: "1" }}>Бот/Акция</div>
          <div style={{ flex: "1" }}>Баланс</div>
          <div style={{ flex: "1" }}>Прибыль</div>
          <div style={{ flex: "1" }}></div>
        </div>
        {userBotSessions.map((card) => {
          const [active, setActive] = useState<boolean>(card.isActive);

          const BotStatus = () => {
            const changeBotStatus = () => {
              console.log(active);
              setActive(!active);
            };
            changeBotStatus();
          };

          return (
            <div
              key={card.id}
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
              <div style={{ fontSize: "24px", fontWeight: "bold" }}>
                {card.botName}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  fontSize: "18px",
                  justifyContent: "space-between",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  marginTop: "10px",
                }}
              >
                <div style={{ flex: "1" }}>{card.stock}</div>
                <div style={{ flex: "1", marginLeft: "20px" }}>
                  {card.sessionBalance}
                </div>
                <div
                  style={{
                    color: card.sessionProfit < 0 ? "red" : "green",
                    flex: "1",
                    marginLeft: "20px",
                  }}
                >
                  {card.sessionProfit}
                </div>
                <div style={{ flex: "1" }}>
                  {active ? (
                    <Button onClick={BotStatus}>Остановить</Button>
                  ) : (
                    <Button onClick={BotStatus}>Старт</Button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div
        style={{
          fontSize: "40px",
          fontWeight: "200",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        У вас нет созданных сессий.
      </div>
    );
  }
}
export default Sessions;
