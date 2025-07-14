import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ marginTop: "2rem", textAlign: "center" }}>
      <p>© 2025 Testimoni</p>
      <Link href="/kontak">Hubungi Kami</Link>
    </footer>
  );
}
