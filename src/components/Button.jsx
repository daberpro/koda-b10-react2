export default function Button(props) {

    return (
        <button className="py-3 outline-0 px-6 cursor-pointer font-bold uppercase text-2xl bg-slate-200 text-slate-800 rounded-xl" onClick={props.click}>
            {props.children}
        </button>
    );

}
