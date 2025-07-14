import Link from "next/link";

export default function KategoriIndex() {
  const kategori = [
    { label: "Grow a Garden", slug: "grow-a-garden" },
    { label: "Jasa Website", slug: "jasa-website" },
  ];

  return (
    <main>
      <h1>Kategori Testimoni</h1>
      <ul style={{ display: "flex", gap: "1rem", flexWrap: "wrap", listStyle: "none", padding: 0 }}>
        {kategori.map(({ label, slug }) => (
          <li key={slug} style={{ padding: 0 }}>
            <Link href={`/kategori/${slug}`} style={buttonStyle}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
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
  boxShadow: "none",
  transition: "all 0.2s ease-in-out",
  display: "inline-block",
};
