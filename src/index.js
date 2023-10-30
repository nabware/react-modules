import { choice, remove } from "./helper";
import { FRUITS } from "./foods";

function App() {
  const randomFruit = choice(FRUITS);

  console.log(`I'd like one ${randomFruit}, please.`);
  console.log(`Here you go: ${randomFruit}`);
  console.log("Delicious! May I have another?");

  remove(FRUITS, randomFruit);

  console.log(`I’m sorry, we’re all out. We have ${FRUITS.length} left.`);
}

App();