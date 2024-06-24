import Item from "./item"
import { itemsData } from "./items.json";

export default function ItemList() {
  
  const items = itemsData;
  return (
    <ul className="divide-y divide-gray-200">
      {items.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </ul>
  );
}