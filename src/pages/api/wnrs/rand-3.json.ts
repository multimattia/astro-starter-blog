export const prerender = false;
export async function GET({ params, request }) {
  const questions = [
    "What do you want to change in your personality right now?",
    "Who do you want to say sorry or thank the most?",
    "If you made a playlist for me, what 5 songs would be on it?",
    "What about me surprised you?",
    "What do you think my superpower is?",
    "Do you think we have some similarities or differences?",
    "Who do you think can be my right partner?",
    "What do I need to read as soon as I have time?",
    "Where am I most qualified to give advice?",
    "What did you learn about yourself while playing this game?",
    "What question were you most afraid to answer?",
    'Why\'s "sorority" still important to college life',
    "What would be the perfect gift for me?",
    "What part of yourself do you see in me?",
    "Based on what you learned about me, what would you suggest I would read?",
    "What would you remember about me when we're no longer in contact?",
    "From what I've heard about me, what Netflix film do you recommend me to watch?",
    "What can I help you with?",
    "How does Sigma Kappa continue to impact your life?",
    "Can you tolerate someone who used to hurt you)?",
    "What do I need to hear right now?",
    "Would you dare to do something out of your comfort zone next week?",
    "Do you think people come into your life for some reason?",
    "Why do you think we met?",
    "What do you think I fear the most?",
    "What is a lesson you will take away from your chat?",
    "What do you suggest I should let go of?",
    "Admit something",
    "What about me that you hardly understand?",
    "How would you describe me to a stranger?",
  ];
  const randomQuestion =
    questions[Math.floor(Math.random() * questions.length)];
  return new Response(
    JSON.stringify({
      question: randomQuestion,
    }),
  );
}