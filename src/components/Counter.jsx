import Button from "./Button.jsx"
import NumberDisplay from "./NumberDisplay";

export default function Counter({ count, counterFunc }) {
    return (
        <div className="p-6 rounded-xl bg-white flex justify-center items-center gap-3 flex-row border border-slate-500 shadow-md">
            <Button
                click={() => {
                    counterFunc((oldCount) => {
                        if (oldCount <= 0) {
                            return 0;
                        }
                        return oldCount - 1;
                    });
                }}
            >
                &minus;
            </Button>
            <NumberDisplay count={ count } />
            <Button
                click={() => {
                    counterFunc((oldCount) => {
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
    );
}
