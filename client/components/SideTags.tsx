export default function SideTags() {
  const tags = ["digital marketing", "designing", "development"];

  return (
    <div className="fixed left-4 md:left-8 lg:left-16 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-10">
      {tags.map((tag, index) => (
        <div key={index} className="relative">
          <span
            className="text-xs font-roboto text-white uppercase tracking-wider whitespace-nowrap"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              letterSpacing: "0.56px",
            }}
          >
            {tag}
          </span>
        </div>
      ))}
    </div>
  );
}
