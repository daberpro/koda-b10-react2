import { useState } from "react";
import Counter from "./components/Counter.jsx";

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex justify-center bg-slate-100 items-center flex-row w-full h-full">
            <Counter count={count} counterFunc={setCount} />
        </div>
    );
}
