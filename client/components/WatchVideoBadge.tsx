export default function WatchVideoBadge() {
  const text = "WATCH - OUR - VIDEO";
  const letters = text.split("");
  const angleStep = 360 / letters.length;

  return (
    <div className="fixed bottom-8 right-4 md:right-8 lg:right-16 z-40 w-24 h-24 md:w-28 md:h-28 cursor-pointer group">
      <div className="relative w-full h-full">
        {/* Circular Background */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 110 110">
          <circle
            cx="55"
            cy="55"
            r="35"
            fill="#F8F8F8"
            className="group-hover:fill-gleamy-orange transition-colors"
          />
        </svg>

        {/* Play Icon in Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            width="16"
            height="20"
            viewBox="0 0 13 18"
            fill="none"
            className="ml-1"
          >
            <path
              d="M1 17V1L11.5 8.5L1 17Z"
              fill="#FF7E21"
              stroke="#FF7E21"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Circular Text */}
        <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
          {letters.map((letter, index) => {
            const angle = index * angleStep - 90;
            const radius = 52;
            const isOrange = letter === "-";
            return (
              <span
                key={index}
                className={`absolute text-[11px] font-roboto ${
                  isOrange ? "text-gleamy-orange" : "text-white"
                }`}
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `
                    rotate(${angle}deg)
                    translate(${radius}px)
                    rotate(90deg)
                  `,
                  transformOrigin: "0 0",
                }}
              >
                {letter}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
