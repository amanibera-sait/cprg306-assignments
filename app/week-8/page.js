"use client";

import Link from "next/link";
import { useUserAuth } from "../week-8/_utils/auth-context";
import ItemList from './shopping-list/item-list'

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleSignIn(){
       await gitHubSignIn();

    }

    async function handleSighOut(){
        await firebaseSignOut();
    }
    console.log(user);

    return (
        <div className="py-10 flex min-h-screen items-center place-content-center">
        {!user && <button className="rounded-3xl bg-gray-400 font-bold text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200" onClick={handleSignIn}>Sign in with Github</button>}
        {user && (
            <div>
                <p className="text-xl py-6">Welcome, <b>{user.displayName} ({user.email})</b></p>
                <button className="rounded-3xl bg-gray-400 font-bold text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200" onClick={handleSighOut}>Sign out</button>
                <Link href={"./week-8/shopping-list"}><button className="rounded-3xl bg-gray-400 font-bold text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Open Shopping List</button></Link>
            </div>
        )}
        </div>
    )
}
