export default function Kontak() {
  return (
    <section style={styles.section}>
      <h1 style={styles.heading}>Kontak</h1>
      <ul style={styles.contactList}>
        <li style={styles.item}>
          <strong>Email:</strong>{" "}
          <a href="mailto:rnasifannafie@gmail.com" style={styles.link}>
            rnasifannafie@gmail.com
          </a>
        </li>
        <li style={styles.item}>
          <strong>Twitter:</strong>{" "}
          <a href="https://x.com/rfdzna" target="_blank" rel="noopener noreferrer" style={styles.link}>
            @rfdzna
          </a>
        </li>
      </ul>
    </section>
  );
}

const styles = {
  section: {
    padding: "2rem",
    paddingTop: "6rem",
    maxWidth: "600px",
    margin: "2rem auto",
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
    gap: "1.2rem",
    fontSize: "1.1rem",
    color: "#1e293b",
  },
  item: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "0.5rem",
  },
  link: {
    color: "#0f172a",
    textDecoration: "none",
    fontWeight: "500",
    transition: "color 0.3s ease",
  },
};
