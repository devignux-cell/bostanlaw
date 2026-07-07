import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  // Web font swaps and dev-mode CSS injection can shift layout after
  // ScrollTriggers first measure their trigger elements, leaving stale
  // start/end positions. Refresh once things settle so reveals fire
  // where they visually should.
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener("load", () => ScrollTrigger.refresh());
}

export { gsap, ScrollTrigger, useGSAP };
