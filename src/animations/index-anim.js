import { stagger, timeline } from "motion";
console.log(window.location.pathname);
if (window.location.pathname === "/") {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );
  document.addEventListener("astro:page-load", () => {
    const maskRect = document.getElementById("mask-rect");
    const content = document.querySelector(".content");
    let sequence;
    console.log(maskRect);
    sequence = [
      [
        maskRect,
        { height: ["100%", "0%"] },
        {
          duration: 1,
          onComplete: () => {
            console.log("completed");
            content.style.clipPath = "none";
          },
        },
      ],
      // [
      //   postit,
      //   {
      //     opacity: [0, 1],
      //     maskPosition: ["bottom", "top"],
      //   },
      //   {
      //     delay: stagger(0.06, {
      //       start: 0.6,
      //     }),
      //     duration: 0.2,
      //     easing: [0.22, 0.03, 0.26, 1],
      //     allowWebkitAcceleration: true,
      //     at: "<",
      //   },
      // ],
    ];
    timeline(sequence);
  });
}
