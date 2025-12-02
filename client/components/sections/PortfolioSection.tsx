const portfolioItems = [
  {
    title: "WahidWeb Portfolio",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
  },
  {
    title: "NFTs Dashboard",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
  },
  {
    title: "WahidWeb Portfolio",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=600&fit=crop",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative min-h-screen flex items-center bg-gleamy-black py-20 overflow-hidden"
    >
      {/* Large Background Letter */}
      <div className="absolute left-8 md:left-24 lg:left-64 top-1/3 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[200px] md:text-[300px] lg:text-[454px] font-poppins lowercase text-stroke-2 leading-[1.7]">
          p
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
            Portfolio
          </h2>
          <div className="w-16 h-px bg-white"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-20">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-10 aspect-[4/3]">
                {index === 2 && (
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                    <svg width="217" height="56" viewBox="0 0 217 56" fill="none">
                      <path
                        d="M34.096 19.504C34.096 23.68 32.656 27.16 29.776 29.944C26.944 32.68 22.6 34.048 16.744 34.048H7.09601V55H0.544006V4.81601H16.744C22.408 4.81601 26.704 6.18401 29.632 8.92001C32.608 11.656 34.096 15.184 34.096 19.504ZM16.744 28.648C20.392 28.648 23.08 27.856 24.808 26.272C26.536 24.688 27.4 22.432 27.4 19.504C27.4 13.312 23.848 10.216 16.744 10.216H7.09601V28.648H16.744ZM61.8233 14.824C64.7993 14.824 67.4873 15.472 69.8873 16.768C72.2873 18.016 74.1593 19.912 75.5033 22.456C76.8953 25 77.5913 28.096 77.5913 31.744V55H71.1113V32.68C71.1113 28.744 70.1273 25.744 68.1593 23.68C66.1913 21.568 63.5033 20.512 60.0953 20.512C56.6393 20.512 53.8793 21.592 51.8153 23.752C49.7993 25.912 48.7913 29.056 48.7913 33.184V55H42.2393V1.72001H48.7913V21.16C50.0873 19.144 51.8633 17.584 54.1193 16.48C56.4233 15.376 58.9913 14.824 61.8233 14.824ZM105.502 55.648C101.806 55.648 98.446 54.808 95.422 53.128C92.446 51.448 90.094 49.072 88.366 46C86.686 42.88 85.846 39.28 85.846 35.2C85.846 31.168 86.71 27.616 88.438 24.544C90.214 21.424 92.614 19.048 95.638 17.416C98.662 15.736 102.046 14.896 105.79 14.896C109.534 14.896 112.918 15.736 115.942 17.416C118.966 19.048 121.342 21.4 123.07 24.472C124.846 27.544 125.734 31.12 125.734 35.2C125.734 39.28 124.822 42.88 122.998 46C121.222 49.072 118.798 51.448 115.726 53.128C112.654 54.808 109.246 55.648 105.502 55.648ZM105.502 49.888C107.854 49.888 110.062 49.336 112.126 48.232C114.19 47.128 115.846 45.472 117.094 43.264C118.39 41.056 119.038 38.368 119.038 35.2C119.038 32.032 118.414 29.344 117.166 27.136C115.918 24.928 114.286 23.296 112.27 22.24C110.254 21.136 108.07 20.584 105.718 20.584C103.318 20.584 101.11 21.136 99.094 22.24C97.126 23.296 95.542 24.928 94.342 27.136C93.142 29.344 92.542 32.032 92.542 35.2C92.542 38.416 93.118 41.128 94.27 43.336C95.47 45.544 97.054 47.2 99.022 48.304C100.99 49.36 103.15 49.888 105.502 49.888ZM181.797 14.824C184.869 14.824 187.605 15.472 190.005 16.768C192.405 18.016 194.301 19.912 195.693 22.456C197.085 25 197.781 28.096 197.781 31.744V55H191.301V32.68C191.301 28.744 190.317 25.744 188.349 23.68C186.429 21.568 183.813 20.512 180.501 20.512C177.093 20.512 174.381 21.616 172.365 23.824C170.349 25.984 169.341 29.128 169.341 33.256V55H162.861V32.68C162.861 28.744 161.877 25.744 159.909 23.68C157.989 21.568 155.373 20.512 152.061 20.512C148.653 20.512 145.941 21.616 143.925 23.824C141.909 25.984 140.901 29.128 140.901 33.256V55H134.349V15.544H140.901V21.232C142.197 19.168 143.925 17.584 146.085 16.48C148.293 15.376 150.717 14.824 153.357 14.824C156.669 14.824 159.597 15.568 162.141 17.056C164.685 18.544 166.581 20.728 167.829 23.608C168.933 20.824 170.757 18.664 173.301 17.128C175.845 15.592 178.677 14.824 181.797 14.824ZM211.912 9.13601C210.664 9.13601 209.608 8.70401 208.744 7.84001C207.88 6.97601 207.448 5.92001 207.448 4.67201C207.448 3.42401 207.88 2.36801 208.744 1.50401C209.608 0.640008 210.664 0.208008 211.912 0.208008C213.112 0.208008 214.12 0.640008 214.936 1.50401C215.8 2.36801 216.232 3.42401 216.232 4.67201C216.232 5.92001 215.8 6.97601 214.936 7.84001C214.12 8.70401 213.112 9.13601 211.912 9.13601ZM215.08 15.544V55H208.528V15.544H215.08Z"
                        fill="#0F0F0F"
                      />
                    </svg>
                  </div>
                )}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="text-center space-y-2">
                <h3 className="text-xl md:text-2xl font-poppins capitalize tracking-wide">
                  {item.title}
                </h3>
                <div className="flex items-center justify-center gap-3">
                  <svg width="5" height="5" viewBox="0 0 5 5" fill="none">
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#FF7E21" />
                  </svg>
                  <span className="text-gleamy-gray font-sans capitalize tracking-wide">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
