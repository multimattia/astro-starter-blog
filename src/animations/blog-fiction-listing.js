import { stagger, timeline } from "motion";
if (
  window.location.pathname === "/blog/" ||
  window.location.pathname === "/fiction/"
) {
  document.addEventListener("astro:page-load", () => {
    let pathname = window.location.pathname;
    const boxes = document.querySelectorAll(".postContainer");
    const tags = document.querySelectorAll("#single-tag");
    const personal = document.getElementById("personal");
    let sequence;
    sequence = [
      [
        boxes,
        {
          transform:
            pathname === "/fiction/"
              ? ["translateY(30px)", "translateY(0)"]
              : ["translateY(-30px)", "translateY(0)"],
        },
        {
          delay: stagger(0.06, {
            start: 0.4,
            from: pathname === "/fiction/" ? "first" : "last",
          }),
          duration: 0.15,
          easing: [0.22, 0.03, 0.26, 1],
          allowWebkitAcceleration: true,
        },
      ],
      [
        boxes,
        { opacity: [0, 1] },
        {
          delay: stagger(0.06, {
            start: 0.4,
            from: pathname === "/fiction/" ? "first" : "last",
          }),
          duration: 0.15,
          easing: [0.22, 0.03, 0.26, 1],
          allowWebkitAcceleration: true,
          at: "<",
        },
      ],
    ];

    if (tags.length > 0) {
      const tagAnimation = [
        [
          personal,
          {
            opacity: [0, 1],
            transform: ["translateX(30px)", "translateX(0)"],
          },
          {
            duration: 0.2,
            easing: [0.22, 0.03, 0.26, 1],
            allowWebkitAcceleration: true,
          },
        ],
        [
          tags,
          { transform: ["translateY(-30px)", "translateY(0)"] },
          {
            delay: stagger(0.03),
            duration: 0.2,
            easing: [0.22, 0.03, 0.26, 1],
            allowWebkitAcceleration: true,
          },
        ],
        [
          tags,
          { opacity: [0, 1] },
          {
            delay: stagger(0.03),
            duration: 0.2,
            easing: [0.22, 0.03, 0.26, 1],
            at: "<",
            allowWebkitAcceleration: true,
          },
        ],
      ];
      sequence.push(...tagAnimation);
    }
    timeline(sequence);
  });
}
