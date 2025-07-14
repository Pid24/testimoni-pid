import Link from "next/link";

const kategoriList = [
  { label: "Grow a Garden", slug: "grow-a-garden" },
  { label: "Jasa Website", slug: "jasa-website" },
];

export default function Kategori() {
  return (
    <section>
      <h2>Kategori Testimoni</h2>
      <ul style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {kategoriList.map(({ label, slug }) => (
          <li key={slug}>
            <Link href={`/kategori/${slug}`}>
              <span style={buttonStyle}>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

const buttonStyle = {
  backgroundColor: "#f3f4f6",
  padding: "0.5rem 1rem",
  borderRadius: "8px",
  border: "1px solid #ccc",
  textDecoration: "none",
  color: "#1e40af",
  fontWeight: "bold",
  transition: "all 0.3s",
  cursor: "pointer",
};
