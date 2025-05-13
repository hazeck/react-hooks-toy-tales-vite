import React from "react";

function ToyCard({ toy, onDelete, onLike }) {
  const handleLike = () => {
    onLike(toy.id);
  };

  const handleDelete = () => {
    onDelete(toy.id);
  };

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p> {/* Removed extra space here */}
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
