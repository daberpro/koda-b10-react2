import { useState } from "react";
import Button from "./components/Button";

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex justify-center bg-slate-100 items-center flex-row w-full h-full">
            <div className="p-6 rounded-xl bg-white flex justify-center items-center gap-3 flex-row border border-slate-500 shadow-md">
                <Button
                    click={() => {
                        setCount((oldCount) => {
                            if (oldCount <= 0) {
                                return 0;
                            }
                            return oldCount - 1;
                        });
                    }}
                >
                    &minus;
                </Button>
                <span className="w-20 text-center text-3xl font-bold">
                    {count}
                </span>
                <Button
                    click={() => {
                        setCount((oldCount) => {
                            if (oldCount >= 10) {
                                return 10;
                            }
                            return oldCount + 1;
                        });
                    }}
                >
                    &#x2b;
                </Button>
            </div>
        </div>
    );
}
