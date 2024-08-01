import { stagger, timeline } from "motion";
if (window.location.pathname.includes("posts")) {
  document.addEventListener("astro:page-load", () => {
    timeline([
      [
        document.querySelectorAll(".main"),
        {
          opacity: [0, 1],
          transform: ["translateY(-30px)", "translateX(0)"],
        },
        {
          delay: stagger(0.05, {
          }),
          duration: 0.2,
          easing: [0.22, 0.03, 0.26, 1],
          allowWebkitAcceleration: true,
        },
      ],
      [
        document.querySelectorAll(".subheading"),
        {
          opacity: [0, 1],
          transform: ["translateY(-30px)", "translateX(0)"],
        },
        {
          delay: stagger(0.05, {
            start: 0.1,
          }),
          duration: 0.2,
          easing: [0.22, 0.03, 0.26, 1],
          allowWebkitAcceleration: true,
        },
      ],
    ]);
  });
}
