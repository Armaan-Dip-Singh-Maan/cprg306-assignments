import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
}

