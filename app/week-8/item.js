export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={() => onSelect(name)}
      className="p-2 bg-white shadow-md rounded-lg cursor-pointer hover:bg-gray-100"
    >
      {name}, {quantity} ({category})
    </li>
  );
}
