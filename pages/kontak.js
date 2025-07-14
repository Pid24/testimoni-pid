export default function Kontak() {
  return (
    <section style={styles.section}>
      <h1 style={styles.heading}>Kontak</h1>
      <ul style={styles.contactList}>
        <li>
          <strong>Email:</strong> <a href="mailto:kamu@example.com">kamu@example.com</a>
        </li>
        <li>
          <strong>WhatsApp:</strong>{" "}
          <a href="https://wa.me/6281234567890" target="_blank">
            0812-3456-7890
          </a>
        </li>
        <li>
          <strong>Instagram:</strong>{" "}
          <a href="https://instagram.com/akunmu" target="_blank">
            @akunmu
          </a>
        </li>
      </ul>
    </section>
  );
}

const styles = {
  section: {
    padding: "2rem",
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#f1f5f9",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1.5rem",
    color: "#1e293b",
    textAlign: "center",
  },
  contactList: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    fontSize: "1.1rem",
    color: "#1e293b",
  },
};
