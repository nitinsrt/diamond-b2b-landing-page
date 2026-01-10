export default function Hero() {
  return (
    <section className="w-full bg-white py-10 pb-0">
      <div className="h-full flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 md:mr-[-80px]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left: Text */}
          <div className="space-y-9">
            <h1 className="text-4xl leading-tight md:text-5xl font-medium text-gray-900 font-serif">
              Buy Natural & Lab-Grown (CVD) Diamonds<br />at Best Prices
            </h1>

            <p className="text-gray-600 text-lg">
              Trusted Sourcing From Surat & Mumbai
            </p>

            <div className="flex gap-4 pt-2">
              <a
                href="https://wa.me/your-number"
                className="px-6 py-3 rounded-md bg-green-900 text-white font-medium hover:bg-green-800 transition"
              >
                WhatsApp Now
              </a>

              <a
                href="#quote"
                className="px-6 py-3 rounded-md bg-green-900 text-white font-medium hover:bg-green-800 transition"
              >
                Request Wholesale Quote
              </a>
            </div>
          </div>

          {/* Right: Diamonds image */}
          <div className="mt-10 md:mt-0 w-full h-full flex justify-center md:justify-start md:items-center">
            <div className="relative w-full h-full md:-ml-30">
              <img
                src="https://i.ibb.co/5ZkYhJh/my-diamonds-bg.png"
                alt="Loose diamonds"
                className="w-[140%] md:w-[160%] h-full object-contain md:object-fill"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
