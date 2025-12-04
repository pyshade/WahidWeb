import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-gleamy-black flex items-center justify-center">
      {/* Large Background Letter */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[200px] md:text-[300px] lg:text-[454px] font-poppins lowercase text-stroke leading-[1.7]">
          w
        </span>
      </div>

      {/* Logo */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins lowercase text-white animate-float">
          wahidweb
        </h1>

        {/* Progress Bar */}
        <div className="w-64 md:w-96 h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-gleamy-orange transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="text-sm md:text-base text-white/60">{progress}%</p>
      </div>
    </div>
  );
}
