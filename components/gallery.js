// components/gallery.jsx
export default function Gallery({ gambarTestimoni }) {
  const defaultImages = ["/images/testi-gag-01.jpeg", "/images/testi-gag-02.jpeg", "/images/testi-gag-03.jpeg"];

  const imagesToShow = Array.isArray(gambarTestimoni) && gambarTestimoni.length ? gambarTestimoni : defaultImages;

  const single = imagesToShow.length === 1;

  return (
    <section>
      <h2>Testimoni</h2>

      <div className={`gallery-grid${single ? " single" : ""}`}>
        {imagesToShow.map((src, i) => (
          <figure key={i} className="card">
            <img className="testi-img" src={src} alt={`Testimoni ${i + 1}`} loading={i > 0 ? "lazy" : "eager"} decoding="async" />
          </figure>
        ))}
      </div>

      <style jsx>{`
        h2 {
          margin: 0 0 12px;
          font-size: 1.25rem;
        }

        /* Grid responsif */
        .gallery-grid {
          display: grid;
          gap: 14px;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          align-items: start; /* tinggi kartu boleh beda-beda */
        }

        /* Kalau cuma 1 foto: batasi lebar & center */
        .gallery-grid.single {
          grid-template-columns: min(600px, 100%);
          justify-content: center;
        }

        /* Kartu gambar tanpa height fix supaya gak cropping */
        .card {
          margin: 0;
          padding: 10px;
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
          overflow: visible; /* pastikan tidak memotong isi */
        }

        /* OVERRIDE global: pastikan gambar tidak dipotong */
        :global(img.testi-img) {
          display: block;
          max-width: 100% !important;
          width: 100% !important;
          height: auto !important; /* <- kunci */
          object-fit: contain !important; /* <- kalau ada rule object-fit cover global */
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
}
