import { stagger, timeline } from "motion";
if (
  window.location.pathname === "/blog/" ||
  window.location.pathname === "/fiction/"
) {
  document.addEventListener("astro:page-load", () => {
    const desc = document.querySelectorAll(".postDesc");
    const postTags = document.querySelectorAll(".tagList");
    let sequence;
    sequence = [
      [
        desc,
        {
          opacity: [0, 1],
          transform: ["translateY(-30px)", "translateX(0)"],
        },
        {
          delay: stagger(0.02, {
            start: 0.2,
          }),
          duration: 0.2,
          easing: [0.22, 0.03, 0.26, 1],
          allowWebkitAcceleration: true,
        },
      ],
      [
        postTags,
        {
          opacity: [0, 1],
          transform: ["translateY(-30px)", "translateX(0)"],
        },
        {
          delay: stagger(0.02, {
            start: 0.3,
          }),
          duration: 0.2,
          easing: [0.22, 0.03, 0.26, 1],
          allowWebkitAcceleration: true,
          at: "<",
        },
      ],
    ];
    timeline(sequence);
  });
}
