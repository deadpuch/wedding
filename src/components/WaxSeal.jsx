// waxseal.png is 3:2 with the seal centred; a square cover-crop keeps just the seal.
export default function WaxSeal({ size = 52, className = "" }) {
  return (
    <img
      src="/waxseal.png"
      alt=""
      style={{ width: size, height: size }}
      className={`object-cover drop-shadow-[0_4px_6px_rgb(70_55_45/0.35)] select-none pointer-events-none ${className}`}
    />
  );
}
