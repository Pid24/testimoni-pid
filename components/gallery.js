export default function Gallery({ gambarTestimoni }) {
  // Fallback jika tidak ada props diberikan
  const defaultImages = ["/images/testi-gag-01.jpeg", "/images/testi-gag-02.jpeg", "/images/testi-gag-03.jpeg"];

  const imagesToShow = gambarTestimoni || defaultImages;

  return (
    <section>
      <h2>Testimoni</h2>
      <div className="gallery-grid">
        {imagesToShow.map((src, i) => (
          <img key={i} src={src} alt={`Testimoni ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}
