import Link from "next/link";

export default function KategoriIndex() {
  const kategori = [
    { label: "Grow a Garden", slug: "grow-a-garden" },
    { label: "Jasa Website", slug: "jasa-website" },
  ];

  return (
    <main>
      <h1>Kategori Testimoni</h1>
      <ul style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {kategori.map(({ label, slug }) => (
          <li key={slug}>
            <Link href={`/kategori/${slug}`}>{label}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
