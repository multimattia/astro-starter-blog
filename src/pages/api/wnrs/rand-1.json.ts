export const prerender = false;
export async function GET({ params, request }) {
  const questions = [
    "What do you think is the hardest part of what I do for a living?",
    "What reality show do you think I'm most likely to watch?",
    "If Myspace was still a thing, what would my profile song be?",
    "What's one of your parents' traits that you wish you could let go of?",
    "Finish the sentence: Just by looking at you, I'd think __________.",
    "If you were to buy me a present, knowing nothing about me other than what I look like, what would it be?",
    "Do you think plants thrive or die in my care? Explain.",
    "Do I seem like more of a creative or analytical type? Explain.",
    "What do my shoes tell you about me?",
    "What subject do you think I thrived at in school and did I fail any?",
    "What do you think I'm most likely to splurge on?",
    "How many speeding tickets do you think I've gotten in my life?",
    "Do you think I've ever been fired from a job? If so, what for?",
    "What's one thing you'll never say no to?",
    "As a child, what do you think I wanted to be?",
    "Do I seem like a morning person or a night owl?",
    "Am I someone you typically connect with?",
    "What's one piece of advice that really stuck with you?",
    "How many speeding tickets do you think I've gotten in my life?",
    "Do you think I'm usually early on time, or late to events? Explain.",
    "Something that brought a smile to my face this week was ______.",
    "What are your favorite song lyrics that come to your mind from the top of your head?",
    "As a child, what do you think I wanted to be?",
  ];
  const randomQuestion =
    questions[Math.floor(Math.random() * questions.length)];
  return new Response(
    JSON.stringify({
      question: randomQuestion,
    }),
  );
}
