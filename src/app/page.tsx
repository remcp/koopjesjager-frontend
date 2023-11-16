"use client";
import React, { useState } from "react";
import { fetchProducts } from "./api";
import jumbologo from "../../public/jumbo.jpg"
import Image from 'next/image'

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [listItems, setListItems] = useState<{ name: string; price: string }[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleAddToList = async () => {
    try {
      const data = await fetchProducts(userInput);
      if (data.length > 0) {
        setListItems((prevItems) => [
          ...prevItems,
          { name: data[0].name, price: "€"+data[0].price }
        ]);
      }
    } catch (error) {
      //TODO: add error handling
    }
  };

  return (
    <div className="flex container mx-auto px-4">
      <div className=" p-4 ">
        <h2>Add Items to List</h2>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="product"
        />
        <button onClick={handleAddToList}>Add</button>
        <ul>
          {listItems.map((item, index) => (
            <li key={index}>
              <span>{item.name}</span>
              <span style={{ marginLeft: "1rem" }}>{item.price}</span>
            </li>
          ))}
        </ul>
        <Image src={jumbologo} alt="jumbo logo" className="w-20 h-10 mx-auto"/>
      </div>
    </div>
  );
}
