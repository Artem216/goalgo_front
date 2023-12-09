import React, { useState } from "react";

import { Button } from "@mui/material";

interface botSession {
  id: number;
  botName: string;
  stock: string;
  sessionBalance: number;
  sessionProfit: number;
  isActive: boolean;
}

function Sessions() {
  const userBotSessions: botSession[] = [
    {
      id: 1,
      botName: "Алгобот1",
      stock: "MTSS",
      sessionBalance: 10000,
      sessionProfit: 15,
      isActive: true,
    },
    {
      id: 2,
      botName: "Алгобот2",
      stock: "MTSS",
      sessionBalance: 12000,
      sessionProfit: 25,
      isActive: true,
    },
    {
      id: 3,
      botName: "Алгобот3",
      stock: "MTSS",
      sessionBalance: 14000,
      sessionProfit: -15,
      isActive: false,
    },
  ];

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
}
export default Sessions;
