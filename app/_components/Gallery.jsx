import Image from "next/image";
import galleryBg from '@/public/pepe-gallary-web.png'

function Gallery() {
  return (
    <section className="h-screen relative">
      <Image
        src={galleryBg}
        fill
        alt="gallery image"
        // placeholder="blur"
      />
    </section>
  );
}

export default Gallery;
