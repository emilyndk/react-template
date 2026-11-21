import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function App() {
  const container = useRef(null);

  // Eksempel på GSAP i React (udkommentér når du vil bruge det):
  // useGSAP(() => {
  //   gsap.from(".box", { y: 20, opacity: 0, duration: 0.6 });
  // }, { scope: container });

  return (
    <div ref={container} className="min-h-screen p-8">
      <h1 className="font-display text-3xl font-bold text-brand">
        Klar til at bygge
      </h1>
    </div>
  );
}
