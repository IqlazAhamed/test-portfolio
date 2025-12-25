import { useEffect, useState } from "react";

export default function TerminalHeader() {
    const text = "Hi, I’m Iqlaz Ahamed — Software Developer";
    const [display, setDisplay] = useState("");

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplay(text.slice(0, i));
            i++;
            if (i > text.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="terminal">
            <span className="green">$</span> {display}
        </div>
    );
}
