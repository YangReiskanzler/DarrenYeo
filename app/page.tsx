import { Greet } from "./components/greet";
import { Counter } from "./components/counter";

export default function Home() {
  return (
    <div className="items-center justify-center flex flex-col h-screen space-y-4">
      <Greet />
      <Counter />
    </div>
  );
}
