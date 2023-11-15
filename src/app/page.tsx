"use client"
import React, { useState } from "react";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [listItems, setListItems] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleAddToList = () => {
    if (userInput.trim() !== "") {
      setListItems((prevItems) => [...prevItems, userInput]);
      setUserInput("");
    }
  };

  return (
    <div className="flex container mx-auto px-4">
      <div className="w-1/2 p-4">
        <h2>Add Items to List</h2>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Type here..."
        />
        <button onClick={handleAddToList}>Add to List</button>
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}