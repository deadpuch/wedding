import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MapPin, Pause, Play } from "lucide-react";
import { song } from "./Home";
import Countdown from "../components/Countdown";
import WaxSeal from "../components/WaxSeal";
import Envelope from "../components/Envelope";

const MAP_LINK = "https://share.google/kYuASGGic1p6Tecjj";

const Img = ({ src, className = "", ...p }) => <img src={src} alt="" draggable="false" className={`absolute pointer-events-none select-none ${className}`} {...p} />;
const Flowers = ({ className }) => <Img src="/flowers.png" className={`drop-shadow-md ${className}`} />;
const Tassel = ({ className }) => <Img src="/gold-tassel.png" className={`sway w-[20cqw] ${className}`} />;
const Script = ({ children, className = "" }) => <span className={`font-heading normal-case tracking-normal ${className}`}>{children}</span>;
const Polaroid = ({ src, className }) => (
  <div className={`absolute bg-white p-[2.2cqw] pb-[9cqw] shadow-paper ${className}`}>
    <img src={src} alt="" className="w-full aspect-square object-cover" />
  </div>
);
// Oval tag with a fine inner rule, as in the reference
const Oval = ({ className, tone = "bg-stone", children }) => (
  <div className={`absolute ${className}`}>
    <div className={`size-full rounded-[50%] ${tone} shadow-paper p-[1.6cqw]`}>
      <div className="size-full rounded-[50%] border border-white/90 flex flex-col items-center justify-center caps">{children}</div>
    </div>
  </div>
);

export default function Invitation() {
  const navigate = useNavigate();
  const ref = useRef(null);
  const [playing, setPlaying] = useState(!song.paused);
  const toggleSong = () => {
    if (song.paused) song.play().catch(() => {});
    else song.pause();
    setPlaying(!song.paused);
  };

  useGSAP(
    () => {
      // Like the reference: within each section every piece blurs in on its own, one after another (hero on load, the rest on scroll)
      gsap.utils.toArray("main > section, main > footer").forEach((sec) => {
        gsap.from(sec.children, { opacity: 0, y: 40, filter: "blur(10px)", duration: 1.1, stagger: 0.22, ease: "power2.out", scrollTrigger: { trigger: sec, start: "top 80%" } });
      });

      // Once the envelope has appeared: the photo slides out, then the car drives up across it and off the top
      gsap.from(".slide-out", { yPercent: 60, rotation: 0, duration: 1, delay: 0.5, ease: "power3.out" });
      const car = ref.current.querySelector(".car");
      gsap
        .timeline({ delay: 1.8, onComplete: () => gsap.set(car, { autoAlpha: 0 }) })
        .to(car, { y: () => -(window.innerHeight + car.offsetHeight), duration: 3.4, ease: "power1.inOut" }, 0)
        .to(car, { rotation: -2, duration: 0.45, repeat: 7, yoyo: true, ease: "sine.inOut" }, 0);
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="overflow-x-clip">
      <button onClick={toggleSong} aria-label={playing ? "Pause music" : "Play music"} className="fixed top-4 right-4 z-[60] size-10 rounded-full bg-white/80 shadow-md flex items-center justify-center cursor-pointer backdrop-blur">
        {playing ? <Pause size={18} /> : <Play size={18} />}
      </button>
      {/* Car overlay: starts just below the viewport */}
      <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
        <img src="/car.png" alt="" className="car absolute top-full left-1/2 -ml-[min(23vw,130px)] w-[min(46vw,260px)] drop-shadow-2xl" />
      </div>

      <main className="@container relative mx-auto w-full max-w-[560px] text-center">
        {/* ================= HERO: ENVELOPE COLLAGE ================= */}
        <section className="relative h-[240cqw] mt-[6cqw]">
          <Envelope className="absolute left-[2cqw] top-0 w-[96cqw]">
            <Polaroid src="/polaroid-car.jpg" className="slide-out left-[8cqw] top-[16cqw] w-[44cqw] -rotate-8" />
          </Envelope>

          <Oval className="z-20 left-[57cqw] top-[20cqw] w-[39cqw] h-[50cqw] rotate-10">
            <p className="text-[3cqw] leading-[1.7]">
              Together
              <br />
              is a
            </p>
            <Script className="text-[10cqw] leading-[0.8] -rotate-6">beautiful</Script>
            <p className="text-[3cqw] mt-[1cqw]">place to be</p>
          </Oval>
          <Tassel className="z-20 left-[65cqw] top-[66cqw]" />

          {/* Arched invitation card */}
          <div className="absolute z-30 left-0 top-[64cqw] w-[68cqw] h-[118cqw] rounded-t-full bg-card shadow-paper-lg p-[2cqw]">
            <div className="size-full rounded-t-full border border-stone flex flex-col items-center justify-center pt-[10cqw]">
              <p className="caps text-[3cqw]">The engagement of</p>
              <h1 className="font-heading text-[19cqw] leading-[0.95] my-[calc(5cqw-0.3em)]">
                Amitha
                <br />
                <span className="text-[14cqw]">and</span>
                <br />
                Jobin
              </h1>
              <p className="caps text-[3.4cqw] tracking-[0.12em] whitespace-nowrap">December 26, 2026</p>
              <p className="caps text-[3cqw] mt-[2cqw]">Saturday · 11:00 AM</p>
              <p className="caps text-[2.9cqw] leading-[1.6] mt-[6cqw]">
                Parakkal Auditorium,
                <br />
                Mythree Nagar,
                <br />
                Mananthavady
              </p>
            </div>
          </div>
          <Flowers className="z-40 -left-[4cqw] top-[58cqw] w-[44cqw] -rotate-12" />

          <Polaroid src="/polaroid-hands.jpg" className="z-20 left-[64cqw] top-[76cqw] w-[38cqw] rotate-12" />
          <Polaroid src="/polaroid-couple.jpg" className="z-30 left-[60cqw] top-[128cqw] w-[42cqw] -rotate-12" />
          <Flowers className="z-40 left-[80cqw] top-[124cqw] w-[24cqw] rotate-45" />

          <Img src="/silk-ribbon.png" className="z-30 left-[34cqw] top-[186cqw] w-[62cqw] -rotate-12" />
          <Oval className="z-40 left-[10cqw] top-[180cqw] w-[40cqw] h-[54cqw] -rotate-4">
            <p className="text-[2.5cqw]">Join us for the</p>
            <Script className="text-[10cqw] leading-[0.9]">beginning</Script>
            <p className="text-[2.5cqw] mt-2">of forever</p>
          </Oval>
        </section>

        {/* ================= LOVE STORY ================= */}
        <section className="relative pt-[14cqw] pb-[18cqw]">
          <Tassel className="z-20 left-[20cqw] -top-[8cqw]" />
          <div className="relative mx-auto w-[86cqw] -rotate-8 bg-card shadow-paper-lg p-[2.4cqw]">
            <div className="border border-stone px-[7cqw] py-[14cqw]">
              <h2 className="caps text-[5cqw]">
                Our <Script className="text-[11cqw]">love</Script> story
              </h2>
              <p className="caps text-[3cqw] leading-[1.75] tracking-[0.14em] mt-[5cqw]">
                It all started with a simple hello that changed everything. Through the years, we’ve grown together, shared countless memories, and
                built a love rooted in friendship, joy, and trust. We’re so excited for what’s ahead and can’t wait to celebrate this special day
                with you by our side.
              </p>
            </div>
            <Flowers className="-left-[8cqw] -top-[8cqw] w-[38cqw] -rotate-12" />
          </div>
          {/* <Img src="/silk-ribbon.png" className="left-[16cqw] bottom-[2cqw] w-[66cqw] rotate-6" /> */}
        </section>

        {/* ================= FAMILIES ================= */}
        <section className="relative pb-[18cqw]">
          <div className="relative mx-auto w-[82cqw] rotate-4 bg-stone shadow-paper p-[2.4cqw]">
            <div className="border border-white px-[6cqw] py-[12cqw] caps text-[2.9cqw] leading-[1.75]">
              <p className="text-[3.4cqw]">With the blessings of</p>
              <Script className="block text-[12cqw] leading-none my-[calc(2cqw-0.3em)]">our families</Script>
              <p className="text-[3.8cqw] mt-[3cqw]">Amitha Kurian</p>
              <p>D/O Kuriakose M S &amp; Shiny Kurian</p>
              <p className="opacity-60">Mattamana House, Mythree Nagar, Mananthavady</p>
              <Script className="block text-[10cqw] my-[calc(2cqw-0.3em)]">and</Script>
              <p className="text-[3.8cqw]">Jobin Paul Varghese</p>
              <p>S/O Varghese C K &amp; Rajani Varghese</p>
              <p className="opacity-60">Chakkumkudi House, Ellumannam P.O., Mananthavady</p>
            </div>
            {/* <WaxSeal size={68} className="absolute! -top-[7cqw] left-1/2 -translate-x-1/2" /> */}
          </div>
        </section>

        {/* ================= COUNTDOWN ================= */}
        <section className="relative pt-[22cqw] pb-[10cqw]">
          <p className="caps text-[5cqw] tracking-[0.3em]">The</p>
          <Script className="block text-[13cqw] leading-none mt-[calc(-1cqw-0.3em)] mb-[calc(5cqw-0.3em)]">countdown</Script>
          <Countdown targetDate="2026-12-26T11:00:00+05:30" />
          <Flowers className="left-1/2 -translate-x-1/2 top-[2cqw] w-[50cqw] " />
        </section>

        {/* ================= DETAILS CIRCLE ================= */}
        <section className="relative pb-[6cqw]">
          <div className="relative mx-auto w-[94cqw] aspect-square rounded-full bg-card shadow-paper-lg p-[2.4cqw]">
            <div className="size-full rounded-full border border-stone flex flex-col items-center justify-center gap-[5cqw] px-[12cqw] caps text-[2.9cqw] leading-[1.65]">
              <div>
                <h3 className="text-[4.8cqw] mb-[1cqw]">Engagement</h3>
                <p>Saturday, Dec 26 · 11:00 AM</p>
                <p>Parakkal Auditorium, Mythree Nagar</p>
              </div>
            </div>
            <WaxSeal size={84} className="absolute! right-[3cqw] top-[3cqw]" />
          </div>
        </section>

        {/* ================= VENUE OVAL ================= */}
        <section className="relative h-[110cqw]">
          <Img src="/silk-ribbon.png" className="-left-[6cqw] top-[10cqw] w-[56cqw] rotate-60" />
          <Oval className="left-[34cqw] top-[2cqw] w-[62cqw] h-[84cqw] rotate-12">
            <p className="text-[2.5cqw]">Engagement venue</p>
            <h3 className="text-[5cqw] leading-[1.25] my-[2cqw] px-[8cqw]">Parakkal Auditorium</h3>
            <p className="text-[2.5cqw] leading-[1.7] px-[10cqw]">Mythree Nagar, Mananthavady, Wayanad</p>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-[1.2cqw] mt-[4cqw] rounded-full bg-ink text-white text-[2.4cqw] tracking-[0.15em] whitespace-nowrap px-[3.8cqw] py-[1.9cqw] ring-1 ring-gold ring-offset-[0.8cqw] ring-offset-card shadow-[0_10px_20px_-8px_rgb(48_48_48/0.6)] transition duration-300 hover:-translate-y-0.5 hover:bg-gold hover:shadow-[0_14px_24px_-8px_rgb(176_141_87/0.7)]"
            >
              <MapPin strokeWidth={1.6} className="size-[3.2cqw] text-gold transition-colors group-hover:text-white" aria-hidden />
              Get directions
            </a>
          </Oval>
          <Tassel className="z-10 left-[56cqw] top-[82cqw]" />
        </section>

        {/* ================= GIFTS ================= */}
        <section className="relative pb-[18cqw]">
          <div className="relative ml-[6cqw] w-[62cqw] -rotate-6 bg-stone shadow-paper p-[2.4cqw]">
            <div className="border border-white px-[5cqw] pt-[14cqw] pb-[8cqw]">
              <Script className="block text-[15cqw] leading-none">Gifts</Script>
              <p className="caps text-[2.9cqw] leading-[1.75] mt-[3cqw]">Your prayers, presence and blessings are the greatest gifts as we begin our new chapter.</p>
            </div>
            <WaxSeal size={72} className="absolute! left-[10cqw] -top-[8cqw]" />
            <Flowers className="-left-[8cqw] -bottom-[5cqw] w-[26cqw]" />
          </div>
        </section>

        {/* ================= CLOSING ================= */}
        <footer className="pb-[14cqw]">
          <h2 className="font-heading text-[19cqw] leading-[0.95]">
            Amitha
            <br />
            <span className="text-[14cqw]">and</span>
            <br />
            Jobin
          </h2>
          <p className="caps text-[4.8cqw] tracking-[0.2em] mt-[6cqw]">December 26, 2026</p>
          <button onClick={() => navigate("/")} className="caps text-[3.4cqw] tracking-[0.25em] mt-[14cqw] cursor-pointer hover:text-gold transition-colors">
            &lt; Back to the envelope
          </button>
          <p className="caps text-[2.2cqw] mt-[6cqw] opacity-60">Mattamana &amp; Chakkumkudi Families</p>
        </footer>
      </main>
    </div>
  );
}
