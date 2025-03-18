import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  if (!Array.isArray(items)) {
    return <p className="text-red-500">Error: Items data is invalid</p>;
  }

  return (
    <ul className="space-y-2">
      {items.length > 0 ? (
        items.map((item) => (
          <Item key={item.id} {...item} onSelect={onItemSelect} />
        ))
      ) : (
        <p className="text-gray-400">No items in your shopping list.</p>
      )}
    </ul>
  );
}
