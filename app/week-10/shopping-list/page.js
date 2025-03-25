import { deleteItem } from "../_services/shopping-list-service";

async function handleDeleteItem(itemId) {
  if (!user) return;
  await deleteItem(user.uid, itemId);
  setItems(items.filter(item => item.id !== itemId));
}

{/* Add a Delete button in your items list */}
<ul className="mt-6">
  {items.map(item => (
    <li key={item.id}>
      {item.name} ({item.quantity}) - {item.category}
      <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
    </li>
  ))}
</ul>
