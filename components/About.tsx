export default function About() {
    return (
      <section className="py-20 bg-gray-600 text-center px-6">
        <h2 className="text-4xl font-semibold text-white">Why Choose Us?</h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-100">
          We are a global diamond manufacturer delivering high-quality certified
          diamonds with competitive pricing. From rough to polished, everything
          happens in-house.
        </p>
  
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-medium">Direct Factory Rates</h3>
            <p className="text-gray-600 mt-3">No middlemen. Transparent pricing.</p>
          </div>
  
          <div>
            <h3 className="text-2xl font-medium">Certified Diamonds</h3>
            <p className="text-gray-600 mt-3">GIA • IGI • SGL Certified.</p>
          </div>
  
          <div>
            <h3 className="text-2xl font-medium">Worldwide Shipping</h3>
            <p className="text-gray-600 mt-3">Fast & secure global delivery.</p>
          </div>
        </div>
      </section>
    );
  }
  