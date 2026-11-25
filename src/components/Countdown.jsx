import { useEffect, useState } from "react";

const UNITS = [
  ["Days", 86400000, Infinity],
  ["Hours", 3600000, 24],
  ["Minutes", 60000, 60],
  ["Seconds", 1000, 60],
];

export default function Countdown({ targetDate }) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, new Date(targetDate) - now);

  return (
    <div className="flex items-start justify-center text-ink">
      {UNITS.map(([label, ms, mod], i) => (
        <div key={label} className="flex items-start">
          {i > 0 && <span className="text-[9cqw] leading-none px-[1cqw]">:</span>}
          <div className="flex flex-col items-center">
            <span className="text-[9cqw] leading-none tabular-nums">
              {String(Math.floor(diff / ms) % mod).padStart(2, "0")}
            </span>
            <span className="caps text-[2cqw] mt-[1.5cqw] tracking-[0.05em]">{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
