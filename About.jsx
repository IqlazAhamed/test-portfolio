import Terminal from "../components/Terminal";

export default function About() {
    return (
        <Terminal title="about_me.sh">
            <p><span style={{ color: "#38bdf8" }}>$</span> whoami</p>
            <p style={{ marginBottom: 14 }}>Rebel — MERN Stack Developer</p>

            <p><span style={{ color: "#38bdf8" }}>$</span> cat bio.txt</p>
            <p style={{ opacity: 0.85 }}>
                I build scalable MERN applications and focus on clean architecture,
                performance, and real-world problem solving.
            </p>
        </Terminal>
    );
}
