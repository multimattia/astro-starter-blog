export const prerender = false;
export async function GET({ params, request }) {
  const questions = [
    "What do you want to change in your personality right now?",
    "Who do you want to say 'sorry' or 'thank you' the most?",
    "If you made a playlist for me, what 5 songs would be on it?",
    "What about me surprised you?",
    "What do you think my superpower is?",
    "Do you think we have more similarities then differences?",
    "Who do you think could be a good partner for me?",
    "What do I need to read as soon as I have the time?",
    "On what topic am I most qualified to give advice?",
    "What did you learn about yourself when playing this game?",
    "What question were you most afraid to answer?",
    "What would be the perfect gift for me?",
    "What part of yourself do you see in me?",
    "Based on what you have learned about me, what would you suggest I would read?",
    "What will you remember about me when we're no longer in contact?",
    "From what I've heard about me, what film do you recommend I watch?",
    "Can you tolerate someone who used to hurt you?",
    "What do I need to hear right now?",
    "Could you be convinved to do something out of your comfort zone next week?",
    "Do you think people come into your life for some preordained reason?",
    "Why do you think we met?",
    "What do you think is my greatest fear?",
    "What is one lesson that you might take away from our conversation?",
    "What do you suggest I should let go of?",
    "Admit something.",
    "Is there anything about me that you hardly understand?",
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
