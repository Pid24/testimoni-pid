import Hero from "../components/hero";
import Kategori from "../components/kategori";
import Gallery from "../components/gallery";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Kategori />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
