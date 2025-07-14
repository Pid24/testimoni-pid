import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Kategori", href: "/kategori" },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Testimoni</div>
      <ul style={styles.navLinks}>
        {navItems.map(({ label, href }) => (
          <li key={href} style={{ background: "transparent", padding: 0 }}>
            <Link href={href} style={buttonStyle}>
              {label}
            </Link>
          </li>
        ))}
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
    margin: 0,
    padding: 0,
  },
};

const buttonStyle = {
  backgroundColor: "#e0f2fe",
  padding: "0.6rem 1.2rem",
  borderRadius: "10px",
  border: "1px solid #38bdf8",
  color: "#0369a1",
  fontWeight: 600,
  textDecoration: "none",
  boxShadow: "none",
  transition: "all 0.2s ease-in-out",
  display: "inline-block",
};
