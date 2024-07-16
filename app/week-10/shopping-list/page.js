"use client"


import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from './items.json'
import { useEffect, useState } from "react";


export default function Page() {
  const router = useRouter()
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  useEffect(()=>{if (!user){
    redirectUser()
  }},[])
  
  function redirectUser(){
    router.push("/week-8")
  }

  const items= itemsData

  function handleAddItem({name, quantity, category}){
    items.push({name, quantity, category})
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

  