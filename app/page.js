import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <nav className="space-x-10">
          <Link href="/week-2">Week 2</Link>
          <Link href="/week-3">Week 3</Link>
          <Link href="/week-4">Week 4</Link>
          <Link href="/week-5">Week 5</Link>
          <Link href="/week-6">Week 6</Link>
        </nav>
      </main>
  );
}
