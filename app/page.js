import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Assignments</h1>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Link href="/week-3" className="text-blue-500 hover:underline">
            Week 3 Assignment - Shopping List
          </Link>
        </li>
      </ul>
    </main>
  );
}
