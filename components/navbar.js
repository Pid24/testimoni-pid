import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Kategori", href: "/kategori" },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShow(false); // scroll down → hide
      } else {
        setShow(true); // scroll up → show
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      style={{
        ...styles.nav,
        opacity: show ? 1 : 0,
        pointerEvents: show ? "auto" : "none",
        transition: "opacity 0.4s ease-in-out",
      }}
    >
      <div style={styles.logo}>Testimoni Pid</div>
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
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
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
