"use client";

import { useState } from "react";
import itemJson from "@/app/week-5/items.json"
import Item from "@/app/week-5/item.js"
import { list } from "postcss";


const listOfItems = [itemJson];

const SortedByName = listOfItems.sort((a, b) => a - b);

const SortedByCategory = listOfItems.map(listOfItems.sort());


export default function ItemList(){

    const [sortBy, setSortBy] = useState("name")

    
    function setSortByName(){
        setSortBy(sortBy => "name");
    }
    
    function setSortByCategory(){
        setSortBy(sortBy => "category");
    }
    
    function SortItems(){
        if (sortBy == "name"){
            return (
                <>
                <button onClick={setSortByName}>Name</button>
                <button onClick={setSortByCategory}>Category</button>
                <ul className="divide-y divide-gray-200">
                  {listOfItems.map((item, index) => (
                    <Item key={index} {...item} />
                  ))}
                </ul>
                </>
              );
        }
        else if (sortBy == "category"){
            return (
                <>
                <button onClick={setSortByName}>Name</button>
                <button onClick={setSortByCategory}>Category</button>
                <ul className="divide-y divide-gray-200">
                  {listOfItems.map((item, index) => (
                    <Item key={index} {...item} />
                  ))}
                </ul>
                </>
              );
        }
    }

}