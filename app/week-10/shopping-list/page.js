"use client"


import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import NewItem from "./new-item";
import { getItems, addItem } from '../_services/shopping-list-service'
import { useEffect, useState } from "react";


export default function Page() {
  const router = useRouter()
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState([])


  useEffect(() => {
    if (!user){
      redirectUser()
    }
    else {
      loadItems()
      
    } 
  }, [])
  
  async function loadItems() {
    const data = await getItems(user.uid);
    const itemsData = data.map(item, index);
    console.log(`Data ${itemsData}`)
    console.log(itemsData)
    setItems(itemsData);
  }

  function redirectUser(){
    router.push("/week-10");
  }

  async function handleAddItem({name, quantity, category}){
    await addItem(user.uid, {name, quantity, category});
    const updatedItems = await getItems(user.uid) 
    setItems(updatedItems);
  }

  return (
        <main>
          {!user && (
            <div onLoad={redirectUser} className="text-4xl font-bold p-6">Redirecting</div>
          )}
          {user && (
            <div>
              <h1 className="text-4xl font-bold p-6">Shopping List</h1>
              <NewItem onAddItem={handleAddItem}/>
              <ItemList items={items}/>
            </div>
          )}
        </main>
    );
  }

  