import { FaUser, FaTools, FaProjectDiagram, FaGraduationCap, FaEnvelope } from "react-icons/fa";

const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
};

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <button onClick={() => scrollTo("about")}><FaUser /></button>
            <button onClick={() => scrollTo("skills")}><FaTools /></button>
            <button onClick={() => scrollTo("projects")}><FaProjectDiagram /></button>
            <button onClick={() => scrollTo("education")}><FaGraduationCap /></button>
            <button onClick={() => scrollTo("contact")}><FaEnvelope /></button>
        </aside>
    );
}
