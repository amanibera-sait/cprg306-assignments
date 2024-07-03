"use client"


import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import { useEffect } from "react";


export default function Page() {
  const router = useRouter()
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  useEffect(()=>{if (!user){
    redirectUser()
  }},[])
  
  function redirectUser(){
    router.push("/week-8")
  }

  return (
        <main>
          {!user && (
            <div onLoad={redirectUser} className="text-4xl font-bold p-6">Redirecting</div>
          )}
          {user && (
            <div>
              <h1 className="text-4xl font-bold p-6">Shopping List</h1>
              <ItemList/>
            </div>
          )}
        </main>
    );
  }

  