export default function FruitArray() {
  //Simple Array
  // const fruits = ["Banana", "Orange", "Manago", "Avocado"];
  //Array of Objects/Complex array
  const fruits = [
    { name: "Apple", price: 12, emoji: "🍎" },
    { name: "Banana", price: 8, emoji: "🍌" },
    { name: "Orange", price: 17, emoji: "🍊" },
    { name: "Mango", price: 20, emoji: "🥭" },
  ];
  return (
    <div>
      <h2>Fruits</h2>
      //Simple array demo
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.name}>
            {fruit.emoji}-{fruit.name}--${fruit.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
