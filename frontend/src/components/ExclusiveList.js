import React from "react";

const ExclusiveList = () => {
  const exclusives = [
    {
      title: "2024 - What a year!",
      likes: 11,
      views: 370,
      thumbnail: "https://via.placeholder.com/300x150",
    },
    {
      title: "Traditional Drapes",
      likes: 5,
      views: 2500,
      thumbnail: "https://via.placeholder.com/300x150",
    },
  ];

  return (
    <div>
      <h3>KYN Exclusive</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {exclusives.map((item, index) => (
          <li key={index} style={{ marginBottom: "20px" }}>
            <img
              src={item.thumbnail}
              alt={item.title}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h4>{item.title}</h4>
            <p>
              {item.likes} likes · {item.views} views
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExclusiveList;
