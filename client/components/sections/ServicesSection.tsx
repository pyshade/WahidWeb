const services = [
  {
    title: "Brand Identity.",
    description:
      "Bringing the history of your brand to the forefront gives an emotional dimension to your visual identity, which is essential today more than ever in today's digital landscape.",
  },
  {
    title: "Technology.",
    description:
      "Bringing the history of your brand to the forefront gives an emotional dimension to your visual identity, which is essential today more than ever in today's digital landscape.",
  },
  {
    title: "UX/UI Design.",
    description:
      "Bringing the history of your brand to the forefront gives an emotional dimension to your visual identity, which is essential today more than ever in today's digital landscape.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative min-h-screen flex items-center bg-gleamy-black py-20 overflow-hidden"
    >
      {/* Large Background Letter */}
      <div className="absolute left-8 md:left-24 lg:left-64 top-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[200px] md:text-[300px] lg:text-[454px] font-poppins lowercase text-stroke-2 leading-[1.7]">
          S
        </span>
      </div>

      {/* Background Text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <h3 className="text-[80px] md:text-[120px] lg:text-[180px] font-poppins font-bold uppercase tracking-wider text-transparent whitespace-nowrap">
          <span
            className="inline-block"
            style={{
              WebkitTextStroke: "1px rgba(77, 77, 77, 0.5)",
            }}
          >
            we are the cre8tive
          </span>
        </h3>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="mb-12 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins uppercase tracking-wide mb-6">
            Services
          </h2>
          <div className="w-16 h-px bg-white"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col gap-8 group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-poppins capitalize tracking-wide">
                  {service.title}
                </h3>
                <p className="text-gleamy-light-gray text-sm md:text-base font-poppins capitalize leading-relaxed tracking-wide">
                  {service.description}
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 text-lg md:text-xl font-sans capitalize tracking-wide hover:text-gleamy-orange transition-colors w-fit"
              >
                <span>Know more</span>
                {index === 0 && (
                  <svg
                    width="45"
                    height="35"
                    viewBox="0 0 45 35"
                    fill="none"
                    className="group-hover:translate-x-2 transition-transform"
                  >
                    <path
                      d="M0 15.899L44.015 0L44.015 18.169L0 34.068L0 15.899Z"
                      fill="#FF7E21"
                    />
                  </svg>
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
