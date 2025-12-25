export default function Card({ title, children }) {
    return (
        <div
            style={{
                background: "#111827",
                padding: "20px",
                borderRadius: "12px",
                border: "1px solid #1f2933",
            }}
        >
            <h3 style={{ marginBottom: "10px" }}>{title}</h3>
            <p style={{ opacity: 0.8 }}>{children}</p>
        </div>
    );
}
