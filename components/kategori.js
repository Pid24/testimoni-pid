import Link from "next/link";

const kategoriList = [
  { label: "Grow a Garden", slug: "grow-a-garden" },
  { label: "Jasa Website", slug: "jasa-website" },
];

export default function Kategori() {
  return (
    <section>
      <h2 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>Kategori Testimoni</h2>
      <ul style={{ display: "flex", gap: "1rem", flexWrap: "wrap", padding: 0, listStyle: "none" }}>
        {kategoriList.map(({ label, slug }) => (
          <li key={slug} style={{ backgroundColor: "transparent", padding: 0, borderRadius: 0 }}>
            <Link href={`/kategori/${slug}`} style={buttonStyle}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

const buttonStyle = {
  backgroundColor: "#e0f2fe",
  padding: "0.6rem 1.2rem",
  borderRadius: "10px",
  border: "1px solid #38bdf8",
  color: "#0369a1",
  fontWeight: 600,
  textDecoration: "none",
  boxShadow: "none", // pastikan nggak ada shadow abu
  transition: "all 0.2s ease-in-out",
  display: "inline-block",
};
