import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex justify-center min-h-screen items-center">
        <div>
          <header>
            <h1 className="text-4xl font-bold py-6">Shopping List</h1>
          </header>
          <nav className="space-x-10 text-xl">
            <Link href="/week-2"><button className="rounded flex auto-rows-auto bg-gray-400 font-bold text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Week 2</button></Link>
            <Link href="/week-3"><button className="rounded flex auto-rows-auto bg-gray-400 font-bold text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Week 3</button></Link>
            <Link href="/week-4"><button className="rounded flex auto-rows-auto bg-gray-400 font-bold text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Week 4</button></Link>
            <Link href="/week-5"><button className="rounded flex auto-rows-auto bg-gray-400 font-bold text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Week 5</button></Link>
            <Link href="/week-6"><button className="rounded flex auto-rows-auto bg-gray-400 font-bold text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Week 6</button></Link>
            <Link href="/week-8"><button className="rounded flex auto-rows-auto bg-gray-400 font-bold text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Week 8</button></Link>
            <Link href="/week-10"><button className="rounded flex auto-rows-auto bg-gray-400 font-bold text-gray-900 p-3 hover:bg-gray-500 hover:text-gray-100 active:bg-gray-200">Week 10</button></Link>
          </nav>
        </div>
      </main>
    </>
  );
}
