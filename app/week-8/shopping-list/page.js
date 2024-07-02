"use client"


import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";

export default function Page() {
  const router = useRouter()
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  
  function redirectUser(){

  }

  return (
        <main>
          {!user && (
            <div onLoad={redirectUser}>Redirecting</div>
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

  