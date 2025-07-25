import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Gallery from "../../components/gallery";

const dataGambar = {
  "grow-a-garden": ["/images/testi-gag-01.jpeg", "/images/testi-gag-02.jpeg", "/images/testi-gag-03.jpeg", "/images/testi-gag-04.jpeg"],
  "jasa-website": [],
};

export default function KategoriDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const [showButton, setShowButton] = useState(false);

  // Scroll event listener untuk menampilkan tombol
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const gambar = dataGambar[slug] || [];

  if (!slug) return <p>Loading...</p>;

  return (
    <>
      <main>
        <h1>Testimoni {slug.replaceAll("-", " ").toUpperCase()}</h1>
        <Gallery gambarTestimoni={gambar} />
      </main>

      {/* Tombol Scroll to Top */}
      {showButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "40px",
            height: "40px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            fontSize: "20px",
            cursor: "pointer",
            zIndex: 1000,
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
          }}
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
}
