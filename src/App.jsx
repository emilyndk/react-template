import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Outlet } from "react-router";

gsap.registerPlugin(useGSAP);

export default function App() {
  const container = useRef(null);

  // Eksempel på GSAP i React (udkommentér når du vil bruge det):
  // useGSAP(() => {
  //   gsap.from(".box", { y: 20, opacity: 0, duration: 0.6 });
  // }, { scope: container });

  return (
    <div ref={container} className="min-h-screen p-8">
      {/* Fast menu i toppen (bliver altid stående) */}
      <nav className="flex gap-4 mb-8 border-b pb-4">
        <Link to="/">Forside</Link>
        <Link to="/about">Om os</Link>
      </nav>

      {/* <Outlet /> er hullet */}
      <Outlet />
    </div>
  );
}
