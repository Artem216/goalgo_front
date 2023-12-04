// import { retry } from "@reduxjs/toolkit/query";
// import React from "react";

// interface Transaction {
//   id: number;
//   name: string;
//   date: string;
//   price: number;
//   amount: number;
//   status: boolean;
// }

// function BuySellBlock() {
//   const props: Transaction[] = [
//     {
//       id: 1,
//       name: "MTSS",
//       date: "21-01-03",
//       price: 251,
//       amount: 3,
//       status: true,
//     },
//     {
//       id: 2,
//       name: "MTSS",
//       date: "21-01-03",
//       price: 253,
//       amount: 4,
//       status: true,
//     },
//     {
//       id: 3,
//       name: "MTSS",
//       date: "21-01-03",
//       price: 280,
//       amount: 7,
//       status: false,
//     },
//   ];

//   return (
//     <div style={{ width: "40%", background: "#F3F4F6", borderRadius: 4 }}>
//       <p>Совершённые сделки:</p>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           paddingLeft: "20px",
//         }}
//       >
//         <div>Акция</div>
//         <div>Дата</div>
//         <div>Цена</div>
//         <div>Количество</div>
//       </div>
//       {props.map((prop) => (
//         <div
//           style={{
//             backgroundColor: prop.status ? "#21D329" : "#D32121",
//             display: "flex",
//             flexDirection: "row",
//             paddingLeft: "20px",
//           }}
//         >
//           <div>{prop.name}</div>
//           <div>{prop.date}</div>
//           <div>{prop.price}</div>
//           <div>{prop.amount}</div>
//           {/* <div>{prop.status}</div> */}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default BuySellBlock;

import { retry } from "@reduxjs/toolkit/query";
import React from "react";

interface Transaction {
  id: number;
  name: string;
  date: string;
  price: number;
  amount: number;
  status: boolean;
}

const BuySellBlock: React.FC = () => {
  const transactions: Transaction[] = [
    {
      id: 1,
      name: "MTSS",
      date: "21-01-03",
      price: 251,
      amount: 3,
      status: true,
    },
    {
      id: 2,
      name: "MTSS",
      date: "21-01-03",
      price: 253,
      amount: 4,
      status: true,
    },
    {
      id: 3,
      name: "MTSS",
      date: "21-01-03",
      price: 280,
      amount: 7,
      status: false,
    },
  ];

  return (
    <div
      style={{
        width: "40%",
        background: "#F3F4F6",
        borderRadius: 4,
        paddingBottom: "20px",
        minHeight: "700px",
        maxHeight: "700px",
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
};

export default BuySellBlock;
