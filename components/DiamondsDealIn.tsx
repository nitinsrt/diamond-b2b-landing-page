export default function DiamondsDealIn() {
    const diamondShapes = [
        { name: "Round", image: "/round-diamond.png" },
        { name: "Pear", image: "/pear-diamond.png" },
        { name: "Oval", image: "/oval-diamond.png" },
        { name: "Emerald", image: "/emerald-diamond.png" },
        { name: "Marquise", image: "/marquise-diamond.png" },
        { name: "Cushion", image: "/cushion-diamond.png" },
        { name: "Princess", image: "/princess-diamond.png" },
    ];

    return (
        <section className="w-full bg-white py-12 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center mb-8 md:mb-12 uppercase tracking-tight">
                    DIAMONDS WE DEAL IN
                </h2>

                {/* Diamond Shapes Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8 mb-12 md:mb-16">
                    {diamondShapes.map((shape, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center"
                        >
                            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center mb-2 md:mb-3">
                                <img
                                    src={shape.image}
                                    alt={shape.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <p className="text-black text-sm md:text-base font-medium text-center">
                                {shape.name}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Three Columns: Sizes, Certificates, Types */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 place-items-center">
                    {/* Sizes Column */}
                    <div className="flex flex-col">
                        <h3 className="text-lg md:text-xl font-bold text-black mb-4 md:mb-6 uppercase">
                            Sizes
                        </h3>
                        <ul className="space-y-2 md:space-y-3">
                            <li className="text-black text-base md:text-lg">0.50ct – 10ct</li>
                        </ul>
                    </div>

                    {/* Certificates Column */}
                    <div className="flex flex-col">
                        <h3 className="text-lg md:text-xl font-bold text-black mb-4 md:mb-6 uppercase">
                            Certificates
                        </h3>
                        <ul className="space-y-2 md:space-y-3">
                            <li className="text-black text-base md:text-lg">GIA</li>
                            <li className="text-black text-base md:text-lg">IGI</li>
                            <li className="text-black text-base md:text-lg">HRD</li>
                        </ul>
                    </div>

                    {/* Types Column */}
                    <div className="flex flex-col">
                        <h3 className="text-lg md:text-xl font-bold text-black mb-4 md:mb-6 uppercase">
                            Types
                        </h3>
                        <ul className="space-y-2 md:space-y-3">
                            <li className="text-black text-base md:text-lg">Solitaires</li>
                            <li className="text-black text-base md:text-lg">Pointers</li>
                            <li className="text-black text-base md:text-lg">Parcels</li>
                            <li className="text-black text-base md:text-lg">Fancy shapes</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

