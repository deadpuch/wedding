import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  const navigate = useNavigate();
  const ref = useRef(null);
  const opening = useRef(false);

  useGSAP(
    () => {
      gsap.from(".intro", { opacity: 0, y: 30, filter: "blur(8px)", duration: 1.2, stagger: 0.2, ease: "power2.out" });
    },
    { scope: ref }
  );

  const open = () => {
    if (opening.current) return;
    opening.current = true;
    gsap
      .timeline({ onComplete: () => navigate("/invitation") })
      .to(".envelope", { scale: 1.06, duration: 0.3, ease: "power2.out" })
      .to(ref.current, { opacity: 0, duration: 0.6, ease: "power2.in" });
  };

  return (
    <main ref={ref} className="@container overflow-x-clip mx-auto w-full max-w-[560px] min-h-svh flex flex-col items-center px-[4cqw] pt-[10cqw] text-center select-none">
      <p className="intro caps text-[3cqw] tracking-[0.25em]">You’ve received an invitation from</p>

      <h1 className="intro font-heading text-[19cqw] leading-[0.95] mt-[calc(6cqw-0.3em)]">
        Amitha
        <br />
        <span className="text-[14cqw]">and</span>
        <br />
        Jobin
      </h1>

      <button onClick={open} aria-label="Open the envelope" className="intro envelope relative w-[124cqw] shrink-0 -my-[6cqw] cursor-pointer transition-transform duration-500 hover:scale-[1.02]">
        <img src="/homeEnvelop.png" alt="" className="w-full drop-shadow-xl" />
      </button>

      <button onClick={open} className="intro caps text-[3.4cqw] tracking-[0.3em] mt-[18cqw] cursor-pointer hover:text-gold transition-colors">
        Open the envelope
      </button>
      <p className="intro caps text-[2cqw] mt-[6cqw] pb-[8cqw] opacity-70">Mattamana &amp; Chakkumkudi Families</p>
    </main>
  );
}
