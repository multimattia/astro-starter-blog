export const prerender = false;
export async function GET({ params, request }) {
  const questions = [
    "What do you think my superpower is?",
    "Admit something.",
    "What about me surprised you?",
    "How would you describe me to a stranger?",
    "Based on what you know about me, do you have a Netflix recommendation?",
    "Based on what you learned about me, what would you recommend I read?",
    "What do you think is one thing I could do that would drastically improve my life?",
    "I want to give myself permission to feel ___________.",
    "What can I help you with?",
    "What do I need to hear right now?",
    "What do you think comes easily to me that's hard for others?",
    "Where am I most qualified to give advice?",
    "What would be the perfect gift for me?",
    "What answer of mine made you light up?",
    "What question were you most afraid to answer?",
    "How does one earn your vulnerability?",
    "Based on what you've learned about me, does my social media portray me accurately?",
    "What would you remember about me if we ever cut contact?",
    "When this game is over, what will be something you will remember about me?",
    "What do you think my weakness is?",
    "What is a lesson you will take away from our conversation?",
    "What do you think I fear the most?",
    "What do you recommend I should let go of?",
    "What about me is the hardest for you to understand?",
    "If we were a band, what would be our name?",
    "What has this conversation taught you about yourself?",
    "What do you think my defining characteristic is?",
    "What do you suggest I should let go of?",
    "Why do you think we met?",
    "How do our personalities complement each other?",
    "What are you still trying to prove to yourself?",
    "What do you think I should know about myself that perhaps I'm unaware of?",
    "How do you think our lives would be different if we didn't meet?",
    "What's something that reminds you of me?",
    "Am I like you expected me to be?",
    "What do you think is the biggest obstacle in my life right now?",
    "In one word, describe how you feel now.",
    "Do you believe everyone has a calling? If so, do you think I've found mine?",
    "What do you think my defining characteristics are?",
    "What have you witnessed recently that has given you hope for humanity in any big or small way?",
    "What do you think is the biggest lesson I've taught you?",
  ];
  const randomQuestion =
    questions[Math.floor(Math.random() * questions.length)];
  return new Response(
    JSON.stringify({
      question: randomQuestion,
    }),
  );
}
