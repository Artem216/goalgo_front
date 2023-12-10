import { retry } from "@reduxjs/toolkit/query";
import React from "react";

import { useState, useEffect } from "react";
import { API_URL } from "../config";
import axios from "axios";

interface Transaction {
  id: number;
  name: string;
  date: string;
  price: number;
  amount: number;
  status: boolean;
}

const BuySellBlock: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const botSessionsResponse = await axios.get(
        API_URL + "/api/v1/trader/get_all_user_bots"
      );

      const activeBots = botSessionsResponse.data.filter(
        (bot: any) => bot.status === true
      );

      const transactionsResponse = await Promise.all(
        activeBots.map(async (bot: any) => {
          const dealsResponse = await axios.post(
            API_URL + "/api/v1/trader/user_deals_by_instrument",
            {
              instrument_code: bot.instrument_code,
            }
          );

          return dealsResponse.data;
        })
      );

      const mergedTransactions = transactionsResponse.flat();

      setTransactions(mergedTransactions);
    } catch (error) {
      console.error(error);
    }
  };
  if (transactions.length > 0) {
    return (
      <div
        style={{
          width: "40%",
          background: "#F3F4F6",
          borderRadius: 4,
          paddingBottom: "20px",
          minHeight: "700px",
          border: "1px solid red",
        }}
      >
        <p
          style={{
            margin: "10px 20px",
            paddingTop: "10px",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          Совершённые сделки:
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "10px 20px",
            backgroundColor: "#F3F4F6",
            marginLeft: "20px",
          }}
        >
          <div style={{ flex: 1 }}>Акция</div>
          <div style={{ flex: 1 }}>Дата</div>
          <div style={{ flex: 1 }}>Цена</div>
          <div style={{ flex: 1 }}>Количество</div>
        </div>
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "10px 20px",
              backgroundColor: transaction.status ? "#21D329" : "#D32121",
              borderRadius: "8px",
              marginTop: "5px",
              marginRight: "20px",
              marginLeft: "20px",
            }}
          >
            <div style={{ flex: 1 }}>{transaction.name}</div>
            <div style={{ flex: 1 }}>{transaction.date}</div>
            <div style={{ flex: 1 }}>{transaction.price}</div>
            <div style={{ flex: 1 }}>{transaction.amount}</div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div
        style={{
          width: "40%",
          background: "#F3F4F6",
          borderRadius: 4,
          paddingBottom: "20px",
          minHeight: "700px",
          border: "1px solid red",
        }}
      >
        <div
          style={{
            fontSize: "30px",
            fontWeight: "200",
            fontFamily: "Roboto, sans-serif",
            marginLeft: "25px",
            marginTop: "25px",
          }}
        >
          У вас нет совершённых сделок.
        </div>
      </div>
    );
  }
};

export default BuySellBlock;
