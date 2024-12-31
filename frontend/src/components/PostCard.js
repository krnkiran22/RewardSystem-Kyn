import React from "react";

const PostCard = () => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        marginBottom: "20px",
        padding: "20px",
      }}
    >
      <h4>
        Sachchu Sathish <span style={{ color: "red" }}>✔️</span>
      </h4>
      <p>1 hr ago · Chennai</p>
      <video width="100%" controls>
        <source src="https://via.placeholder.com/640x360" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button style={{ background: "black", color: "white", marginTop: "10px" }}>
        Follow
      </button>
    </div>
  );
};

export default PostCard;
