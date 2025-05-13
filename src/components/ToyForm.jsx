import React, { useState } from 'react';

const ToyForm = () => {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [toys, setToys] = useState([]); // State for managing the list of toys

  const handleNameChange = (e) => setName(e.target.value);
  const handleImageUrlChange = (e) => setImageUrl(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !imageUrl) return; // Don't submit if the fields are empty

    // Create a new toy object
    const newToy = { name, imageUrl };

    // Update the toys list
    setToys([...toys, newToy]);

    // Reset the form fields
    setName('');
    setImageUrl('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a toy's name..."
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="Enter a toy's image URL..."
          value={imageUrl}
          onChange={handleImageUrlChange}
        />
        <button type="submit">Create New Toy</button>
      </form>

      <h2>Toy List</h2>
      <ul>
        {toys.map((toy, index) => (
          <li key={index}>{toy.name}</li> // Displaying the toy name
        ))}
      </ul>
    </div>
  );
};

export default ToyForm;
