import React, { useState, useEffect } from "react";
import ToyCard from "./ToyCard";

function ToyContainer() {
  const [toys, setToys] = useState([]);

  // Fetch toys on page load
  useEffect(() => {
    fetch("http://localhost:3000/toys")
      .then((response) => response.json())
      .then((data) => setToys(data))
      .catch((error) => console.error("Error fetching toys:", error));
  }, []);

  // Handle deleting a toy
  const handleDeleteToy = (id) => {
    fetch(`http://localhost:3000/toys/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        // Remove the toy from the state
        setToys((prevToys) => prevToys.filter((toy) => toy.id !== id));
      })
      .catch((error) => console.error("Error deleting toy:", error));
  };

  // Handle liking a toy
  const handleLikeToy = (id) => {
    const toyToUpdate = toys.find((toy) => toy.id === id);
    if (toyToUpdate) {
      fetch(`http://localhost:3000/toys/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          likes: toyToUpdate.likes + 1, // Increment the like count
        }),
      })
        .then((response) => response.json())
        .then((updatedToy) => {
          // Update the state to reflect the new likes
          setToys((prevToys) =>
            prevToys.map((toy) =>
              toy.id === updatedToy.id ? updatedToy : toy
            )
          );
        })
        .catch((error) => console.error("Error liking toy:", error));
    }
  };

  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          onDelete={handleDeleteToy}
          onLike={handleLikeToy}
        />
      ))}
    </div>
  );
}

export default ToyContainer;
