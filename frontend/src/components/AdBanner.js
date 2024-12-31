import React from "react";

const AdBanner = () => {
  return (
    <div
      style={{
        backgroundColor: "#f8d7da",
        padding: "20px",
        borderRadius: "8px",
        marginBottom: "20px",
        textAlign: "center",
      }}
    >
      <img
        src="https://via.placeholder.com/300x150"
        alt="Ad Banner"
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h2>Trendy Collection at the Thrift Store!</h2>
      <button style={{ background: "red", color: "white", padding: "10px" }}>
        Watch Now
      </button>
    </div>
  );
};

export default AdBanner;
