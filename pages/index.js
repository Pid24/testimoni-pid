import { useEffect, useState } from "react";
import Hero from "../components/hero";
import Kategori from "../components/kategori";
import Gallery from "../components/gallery";
import Footer from "../components/footer";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

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

  return (
    <>
      <main>
        <Hero />
        <Kategori />
        <Gallery />
      </main>
      <Footer />

      {/* Tombol Scroll ke Atas */}
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
