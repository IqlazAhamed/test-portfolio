import { motion } from "framer-motion";
import Terminal from "../components/Terminal";

const skills = [
    { name: "React", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "Express", level: 70 },
];

export default function Skills() {
    return (
        <Terminal title="skills.json">
            {skills.map((skill) => (
                <div key={skill.name} style={{ marginBottom: 14 }}>
                    <p>{skill.name}</p>
                    <div style={{ background: "#1f2933", height: 8, borderRadius: 6 }}>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.6 }}
                            style={{
                                height: "100%",
                                background: "#38bdf8",
                                borderRadius: 6,
                            }}
                        />
                    </div>
                </div>
            ))}
        </Terminal>
    );
}
