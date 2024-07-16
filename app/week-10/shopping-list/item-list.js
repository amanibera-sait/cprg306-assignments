"use client";

import { useState } from "react";
import Item from "./item.js"


export default function ItemList({items}){

    const listOfItems = items;

    const [sortBy, setSortBy] = useState();

    
    function setSortByName(){
        setSortBy(sortedOption => "name");
        SortItems();
    }
    
    function setSortByCategory(){
        setSortBy(sortedOption => "category");
        SortItems();
    }
    
    function SortItems(){

      const sortedOption = sortBy;
        if (sortedOption == "name") {
          return listOfItems.sort((a, b) => a.category.localeCompare(b.category));
          } else if (sortedOption == "category") {
          return listOfItems.sort((a, b) => a.name.localeCompare(b.name));
        }
    }

    return (
      <>
      <div className="flex col-span-2 p-6 space-x-7"> 
        <p className="content-center font-bold">Sort By:</p>
        <button className="rounded  bg-gray-400 font-bold text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200" onClick={setSortByName}>Name</button>
        <button className="rounded  bg-gray-400 font-bold text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200" onClick={setSortByCategory}>Category</button>
      </div>
      <ul className="divide-y">
        {listOfItems.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
      </>
    );
}