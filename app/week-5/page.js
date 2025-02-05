// /app/week-5/page.js
import NewItem from "./new-item";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Week 5 - New Item Form</h1>
      <NewItem />
      <Link href="/">Back to Home</Link>
    </div>
  );
}