export const prerender = false;
export async function GET({ params, request }) {
  const questions = [
    "How likely do you think I will change my career?",
    "What was your first impression of me?",
    "What is the last thing you lied about?",
    "What have you been hiding all those years?",
    "What is your weirdest thinking?",
    "What is the last thing you lied to your mom about?",
    "What's the biggest mistake you've made?",
    "What is the worst pain you have ever been in?",
    "What are you still trying to prove to yourself?",
    "What is your most defining personality?",
    "What is the hardest part about dating you?",
    "What is the best thing about your father or mother?",
    "What is the favorite lyric you can't stop thinking about in your head?",
    "Are you lying to yourself about anything?",
    "What animal that you want to raise?",
    "What would you feel best to fully accept in this current status?",
    "When was the last time you felt lucky to be you?",
    "What is the adjective that best describes you in the past and now?",
    "What would your younger self not believe about your life today?",
    "Which part of your family that you want to keep or let go of?",
    "What is your favorite memory from your childhood?",
    "How long does it take to be friends with you?",
    "What takes someone from a friend to a best friend for you?",
    "What question are you trying to answer in your life right now?",
    "What would you tell your younger self?",
    "What is your most regretful action?",
    "When was the last time you cried?",
    "What are you better at than most people you know?",
    "Who do you want to talk to when you feel lonely?",
    "What is the hardest part of being abroad?",
  ];
  const randomQuestion =
    questions[Math.floor(Math.random() * questions.length)];
  return new Response(
    JSON.stringify({
      question: randomQuestion,
    }),
  );
}
