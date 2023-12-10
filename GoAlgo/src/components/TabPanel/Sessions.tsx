import React, { useEffect, useState } from "react";

import { Button, Card } from "@mui/material";

import axios from "axios";
import { API_URL } from "../../config";
import authHeader from "../../utils/authHeaders";

interface botSession {
  id: number;
  botName: string;
  stock: string;
  sessionBalance: number;
  sessionProfit: number;
  isActive: boolean;
}

// function Sessions() {
//   const [loading, setLoading] = useState(true);
//   const [userBotSessions, setUserBotSessions] = useState<botSession[]>([]);

//   const fetchBotSessions = async () => {
//     try {
//       const response = await axios.get(
//         API_URL + "/api/v1/trader/get_all_user_bots",
//         {
//           headers: authHeader(),
//         }
//       );
//       console.log(response.data);
//       setUserBotSessions(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBotSessions();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   const [active, setActive] = useState<boolean>(false);

//   const BotStatus = () => {
//     const changeBotStatus = () => {
//       console.log(active);
//       setActive(!active);
//     };
//     changeBotStatus();
//   };

//   return (
//     <div>
//       <div
//         style={{
//           fontSize: "20px",
//           fontWeight: "bold",
//           fontFamily: "Roboto, sans-serif",
//           marginBottom: "20px",
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "space-between",
//           paddingLeft: "20px",
//           paddingRight: "20px",
//         }}
//       >
//         <div style={{ flex: "1" }}>Бот/Акция</div>
//         <div style={{ flex: "1" }}>Баланс</div>
//         <div style={{ flex: "1" }}>Прибыль</div>
//         <div style={{ flex: "1" }}></div>
//       </div>
//       {userBotSessions.map((card) => {
//         return (
//           <div
//             key={card.id}
//             style={{
//               background: "#f2f2f2",
//               display: "flex",
//               flexDirection: "column",
//               padding: "20px",
//               marginBottom: "20px",
//               borderRadius: "8px",
//               fontFamily: "Roboto, sans-serif",
//             }}
//           >
//             <div style={{ fontSize: "24px", fontWeight: "bold" }}>
//               {card.botName}
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 fontSize: "18px",
//                 justifyContent: "space-between",
//                 paddingLeft: "20px",
//                 paddingRight: "20px",
//                 marginTop: "10px",
//               }}
//             >
//               <div style={{ flex: "1" }}>{card.stock}</div>
//               <div style={{ flex: "1", marginLeft: "20px" }}>
//                 {card.sessionBalance}
//               </div>
//               <div
//                 style={{
//                   color: card.sessionProfit < 0 ? "red" : "green",
//                   flex: "1",
//                   marginLeft: "20px",
//                 }}
//               >
//                 {card.sessionProfit}
//               </div>
//               <div style={{ flex: "1" }}>
//                 {active ? (
//                   <Button onClick={BotStatus}>Остановить</Button>
//                 ) : (
//                   <Button onClick={BotStatus}>Старт</Button>
//                 )}
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
// export default Sessions;

function Sessions() {
  const [loading, setLoading] = useState(true);
  const [userBotSessions, setUserBotSessions] = useState<botSession[]>([]);
  const [activeStates, setActiveStates] = useState<boolean[]>([]);

  const fetchBotSessions = async () => {
    try {
      const response = await axios.get(
        API_URL + "/api/v1/trader/get_all_user_bots",
        {
          headers: authHeader(),
        }
      );
      console.log(response.data);
      setUserBotSessions(response.data);
      setActiveStates(response.data.map(() => false)); // Создаем массив состояний с исходным значением false
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBotSessions();
  }, []);

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
        <div style={{ flex: "1" }}>Бот/Акция</div>
        <div style={{ flex: "1" }}>Баланс</div>
        <div style={{ flex: "1" }}>Прибыль</div>
        <div style={{ flex: "1" }}></div>
      </div>
      {userBotSessions.map((card, index) => {
        const isActive = activeStates[index]; // Получаем текущее состояние для каждой сессии бота

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
                <Button onClick={() => handleBotStatus(index)}>
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
