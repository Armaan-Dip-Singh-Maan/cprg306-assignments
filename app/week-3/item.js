export default function Item({ name, quantity, category }) {
  return (
    <li className="p-4 border border-gray-700 rounded-md bg-gray-800 text-white shadow-md">
      <p className="text-lg font-bold">{name}</p>
      <p className="text-sm text-gray-400">Buy {quantity} in {category}</p>
    </li>
  );
}

