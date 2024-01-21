import React, { useState } from "react";

export default function DiscountCode({ code, showCode }) {
  return (
    <div>
      {showCode ? (
        <p>Discount Code: {code}</p>
      ) : (
        <div
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "5px",
            display: "flex",
            justifyContent: "center",
            marginBottom: "5px",
            borderRadius: "5px",
          }}
        >
          MUST PAY FIRST
        </div>
      )}
    </div>
  );
}
