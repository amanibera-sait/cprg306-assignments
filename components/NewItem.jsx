"use client";
 
import { useState } from "react";

export function NewItem() {

    const [name, setName] = useState(" ");

    const [quantity, setQuantity] = useState(1);

    const [category, setCategory] = useState("Produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Item has been submited");
    }

    const handleChange = (event) => {
        setName(event.target.value.toUpperCase());
      }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                <input type="text" placeholder="Name" value={name}/>
                <input type="text" placeholder="Name" value={quantity}/>
                <select value={category.useState}>
                    <option value={"Produce"}>Produce</option>
                    <option value={"Dairy"}>Dairy</option>
                    <option value={"Bakery"}>Bakery</option>
                    <option value={"Frozen Foods"}>Frozen Foods</option>
                    <option value={"Canned Goods"}>Canned Goods</option>
                    <option value={"Dry Goods"}>Dry Goods</option>
                    <option value={"Beverages"}>Beverages</option>
                    <option value={"Snacks"}>Snacks</option>
                    <option value={"Household"}>Household</option>
                    <option value={"Other"}>Other</option>
                </select>
                <button>Submit</button>
            </label>
          </form>
    );

}