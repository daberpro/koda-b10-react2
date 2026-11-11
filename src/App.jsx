import { useState } from "react";
import Button from "./components/Button";

export default function App() {

    const [count, setCount] = useState(0);

    return (
        <div className="flex justify-center bg-slate-100 items-center flex-row w-full h-full">
            <div className="p-6 rounded-xl bg-white flex justify-center items-center gap-3 flex-row border border-slate-500 shadow-md">

            </div>
        </div>
    );

}
