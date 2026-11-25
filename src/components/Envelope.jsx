// Open envelope built from two layers: bottomCard (open flap + liner) behind, topCard (front pocket) in front.
// Offsets are measured from the PNGs so the flap's widest point meets the pocket's top corners.
// `children` render between the layers (e.g. a card sliding out); `front` renders above the pocket.
export default function Envelope({ className = "", children, front }) {
  return (
    <div className={`@container aspect-[100/108.5] ${className}`}>
      <img src="/bottomCard.png" alt="" className="absolute -left-[6cqw] top-0 w-[111.6cqw] max-w-none pointer-events-none" />
      {children}
      <img src="/topCard.png" alt="" className="absolute left-0 top-[44.9cqw] w-full drop-shadow-[0_-3px_6px_rgb(70_55_45/0.18)] pointer-events-none" />
      {front}
    </div>
  );
}
