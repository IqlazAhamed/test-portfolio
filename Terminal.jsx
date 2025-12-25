import { motion } from "framer-motion";

export default function Terminal({ title, children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
                background: "#020617",
                borderRadius: "12px",
                border: "1px solid #1f2933",
                overflow: "hidden",
            }}
        >
            {/* Terminal Header */}
            <div
                style={{
                    background: "#020617",
                    padding: "10px 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    borderBottom: "1px solid #1f2933",
                }}
            >
                <span style={{ width: 12, height: 12, background: "#ef4444", borderRadius: "50%" }} />
                <span style={{ width: 12, height: 12, background: "#facc15", borderRadius: "50%" }} />
                <span style={{ width: 12, height: 12, background: "#22c55e", borderRadius: "50%" }} />
                <span style={{ marginLeft: 10, fontSize: 13, opacity: 0.7 }}>
                    {title}
                </span>
            </div>

            {/* Terminal Body */}
            <div style={{ padding: "20px", fontFamily: "JetBrains Mono, monospace" }}>
                {children}
            </div>
        </motion.div>
    );
}
