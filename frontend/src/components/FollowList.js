import React from "react";

const FollowList = () => {
  const users = [
    { name: "Thinusha", verified: true },
    { name: "Monisha Murthy", verified: true },
    { name: "Janpan bites", verified: true },
    { name: "Venkat", verified: true },
    { name: "VJ ARUN", verified: true },
    { name: "pavithra s", verified: false },
  ];

  return (
    <div>
      <h3>Follow your KYNs</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {users.map((user, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={`https://via.placeholder.com/40`}
                alt={user.name}
                style={{ borderRadius: "50%", marginRight: "10px" }}
              />
              <span>
                {user.name}{" "}
                {user.verified && <span style={{ color: "red" }}>✔️</span>}
              </span>
            </div>
            <button style={{ background: "black", color: "white" }}>Follow</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowList;
