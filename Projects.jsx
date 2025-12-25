import Terminal from "../components/Terminal";

export default function Projects() {
    return (
        <Terminal title="projects.log">
            <p><span style={{ color: "#38bdf8" }}>$</span> ls</p>

            <ul style={{ marginTop: 12, lineHeight: 1.8 }}>
                <li>hotel-management-system — MERN, Auth, MongoDB</li>
                <li>qr-photo-sharing-app — QR based photo sharing</li>
            </ul>
        </Terminal>
    );
}
