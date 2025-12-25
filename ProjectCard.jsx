import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ title, tech, desc, github, live }) {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p className="tech">{tech}</p>
            <p>{desc}</p>
            <div className="actions">
                <a href={github}><FaGithub /> GitHub</a>
                <a href={live}><FaExternalLinkAlt /> Live</a>
            </div>
        </div>
    );
}
