export default function HeroSection() {
  const services = [
    "creative design",
    "ui/ux",
    "marketing",
    "motion",
    "animation",
    "branding",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gleamy-black pt-32 pb-20"
    >
      {/* Large Background Letter */}
      <div className="absolute left-8 md:left-24 lg:left-32 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
        <span className="text-[200px] md:text-[300px] lg:text-[454px] font-poppins lowercase text-stroke leading-[1.7]">
          g
        </span>
      </div>

      {/* Animated Straps */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {/* Top Right Diagonal Strap - White */}
        <div
          className="absolute w-[200%] h-24 md:h-32 bg-gleamy-off-white -right-[30%] top-[15%]"
          style={{
            transform: "rotate(44.7deg)",
            transformOrigin: "center",
          }}
        >
          <div className="flex items-center justify-center gap-12 md:gap-20 h-full animate-scroll-left">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 md:gap-20">
                {services.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-6 md:gap-12">
                    <span className="text-gleamy-dark text-xl md:text-3xl font-roboto uppercase whitespace-nowrap">
                      {service}
                    </span>
                    {idx < services.length - 1 && (
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        className="flex-shrink-0"
                      >
                        <ellipse
                          cx="8.36"
                          cy="8.15"
                          rx="8"
                          ry="8.5"
                          transform="rotate(57.66 8.36 8.15)"
                          fill="#FF7E21"
                        />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Diagonal Strap - Black */}
        <div
          className="absolute w-[200%] h-24 md:h-32 bg-gleamy-dark border-y-[10px] border-gleamy-dark -left-1/4 top-[75%]"
          style={{
            transform: "rotate(-12.95deg)",
            transformOrigin: "center",
          }}
        >
          <div className="flex items-center justify-center gap-12 md:gap-20 h-full animate-scroll-left">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 md:gap-20">
                {services.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-6 md:gap-12">
                    <span className="text-white text-xl md:text-3xl font-roboto uppercase whitespace-nowrap">
                      {service}
                    </span>
                    {idx < services.length - 1 && (
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        className="flex-shrink-0"
                      >
                        <ellipse cx="8" cy="8.5" rx="8" ry="8.5" fill="#FF7E21" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-30">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-poppins font-normal leading-tight mb-8">
            <span className="text-white">Brand.</span>
            <span className="text-gleamy-gray">Design.</span>
            <span className="text-gleamy-gray">Product.</span>
            <br />
            <span className="text-white">In-House Development.</span>
            <br />
            <span className="text-white">&More</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
