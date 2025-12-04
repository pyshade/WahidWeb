import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center bg-gleamy-black py-20 overflow-hidden"
    >
      {/* Large Background Letter */}
      <div className="absolute left-8 md:left-24 lg:left-64 top-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[200px] md:text-[300px] lg:text-[454px] font-poppins lowercase text-stroke-2 leading-[1.7]">
          w
        </span>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Title */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins uppercase tracking-wide mb-6">
              About Us
            </h2>
            <div className="w-16 h-px bg-white mb-8"></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-poppins uppercase tracking-wide mb-6 leading-relaxed">
                We are a digital production team.
              </h3>
              <div className="relative inline-block mb-6">
                <svg
                  width="45"
                  height="35"
                  viewBox="0 0 45 35"
                  fill="none"
                  className="absolute -left-16 top-0"
                >
                  <path
                    d="M0 15.899L44.015 0L44.015 18.169L0 34.068L0 15.899Z"
                    fill="#FF7E21"
                  />
                </svg>
              </div>
            </div>

            <p className="text-lg md:text-2xl lg:text-3xl font-poppins uppercase leading-relaxed tracking-wide text-white">
              WahidWeb is a young web agency based in
              Malta. We help startups & Fortune 500 companies delight humans on
              the other side of the screen.{" "}
              <span className="inline-flex items-center gap-2">
                <svg
                  width="45"
                  height="35"
                  viewBox="0 0 45 35"
                  fill="none"
                  className="inline-block"
                >
                  <path
                    d="M0 15.899L44.015 0L44.015 18.169L0 34.068L0 15.899Z"
                    fill="#FF7E21"
                  />
                </svg>
              </span>
            </p>

            <div className="pt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 text-xl md:text-2xl font-sans capitalize tracking-wide hover:text-gleamy-orange transition-colors group"
              >
                <span>Contact us</span>
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
