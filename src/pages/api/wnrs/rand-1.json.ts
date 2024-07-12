export const prerender = false;
export async function GET({ params, request }) {
  const questions = [
    "What is the first thing you noticed about me?",
    "What do you think is the hardest part of what I do for a living?",
    "What reality show do you think I'm most likely to watch?",
    "If Myspace was still a thing, what would my profile song be?",
    "On a scale of 1-10, how messy do you think my car is? 1 being the cleanest, and 10 complete disaster, explain.",
    "What's one of your parents' traits that you wish you could let go of?",
    "Between the two of us, who seems like the better texter? Explain.",
    "What was your first impression of me?",
    "Do I look kind? Explain.",
    "Finish the sentence: Just by looking at you, I'd think __________.",
    "Do I seem like someone who would get a name tattooed on myself? Why or why not?",
    "If you were to buy me a present, knowing nothing about me other than what I look like, what would it be?",
    "What about me intrigues you?",
    "What does my Instagram tell you about me?",
    "Do you think plants thrive or die in my care? Explain.",
    "Do I seem like more of a creative or analytical type? Explain.",
    "What do my shoes tell you about me?",
    "What subject do you think I thrived at in school and did I fail any?",
    "Finish the sentence: just by looking at you, I'd think…",
    "Do you think I fall in love easily? Why or why not?",
    "What do you think I'm most likely to splurge on?",
    "How many speeding tickets do you think I've gotten in my life?",
    "How would you describe what you think my type is in three words?",
    "Do you think I've ever been fired from a job? If so, what for?",
    "What did you think about my first message?",
    "What's one thing you'll never say no to?",
    "As a child, what do you think I wanted to be?",
    "Do I seem like a morning person or a night owl?",
    "Am I someone you typically connect with?",
    "Do you think I was popular in school? Explain.",
    "What compliment do you think I hear the most?",
    "What's one piece of advice that really stuck with you?",
    "What movie or book do you think I'm most like, and why?",
    "How many speeding tickets do you think I've gotten in my life?",
    "Do I seem like someone who would get a name tattooed on myself? Why or why not?",
    "Do you think I'm usually early on time, or late to events? Explain.",
    "Do I intimidate you? Why or why not?",
    "What does my phone wallpaper tell you about me?",
    "Do I remind you of anyone you know?",
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
