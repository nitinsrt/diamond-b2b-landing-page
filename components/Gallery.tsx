export default function Gallery() {
  const images = [
    { src: "https://i.ibb.co/NnpN8LSp/view-brilliant-cartoon-diamond.png", alt: "Diamond 1" },
    { src: "https://i.ibb.co/Lz1DvXj7/pngwing-com.png", alt: "Diamond 2" },
    { src: "https://i.ibb.co/4wmCrs1k/beautiful-engagement-ring-with-diamonds.jpg", alt: "Diamond 3" },
    { src: "https://i.ibb.co/XxswgV0y/bright-pink-diamonds-arrangement.jpg", alt: "Diamond 4" },
  ];
    return (
      <section className="py-20 bg-gray-600 px-6">
        <h2 className="text-center text-4xl font-semibold">Our Diamonds</h2>
  
        <div className="flex flex-row justify-center items-center max-w-6xl mx-auto mt-12">
          {images.map((n) => (
            <div key={n.src} className="rounded-xl shadow-lg hover:scale-105 transition mr-8 w-80 h-80 overflow-hidden bg-white">
            <img
              src={n.src}
              alt={n.alt}
              className="w-full h-full object-cover"
            />
            </div>
          ))}
        </div>
      </section>
    );
  }
  