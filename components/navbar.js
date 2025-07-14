import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Testimoni</div>
      <ul style={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/kategori">Kategori</Link>
        </li>
        <li>
          <Link href="/kontak">Kontak</Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.75rem 2rem",
    backgroundColor: "#1e293b",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 50,
  },
  logo: {
    fontSize: "1.3rem",
    fontWeight: "bold",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "1rem",
  },
};
