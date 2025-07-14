import { useRouter } from "next/router";
import Gallery from "../../components/gallery";

const dataGambar = {
  "grow-a-garden": ["/images/testi-gag-01.jpeg", "/images/testi-gag-02.jpeg", "/images/testi-gag-03.jpeg", "/images/testi-gag-04.jpeg"],
  "jasa-website": [],
};

export default function KategoriDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const gambar = dataGambar[slug] || [];

  if (!slug) return <p>Loading...</p>;

  return (
    <main>
      <h1>Testimoni {slug.replaceAll("-", " ").toUpperCase()}</h1>
      <Gallery gambarTestimoni={gambar} />
    </main>
  );
}
