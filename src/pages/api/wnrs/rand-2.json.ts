export const prerender = false;
export async function GET({ params, request }) {
  const questions = [
    "How likely do you think I will change my career?",
    "What was your first impression of me?",
    "What was the last thing you lied about?",
    "Have you been hiding from anything in your past?",
    "What has been your strangest thought this past week?",
    "What was the last thing you lied to your mom about?",
    "What was the biggest mistake that you've made?",
    "What is the worst pain you have ever been in?",
    "What are you still trying to prove to yourself?",
    "What is your most defining personality trait?",
    "What is the hardest part about dating you?",
    "What is the best thing about your father or mother?",
    "What is a lyric you can't get out of your head?",
    "Are you lying to yourself about anything?",
    "What animal would you most want to raise?",
    "When was the last time you felt lucky to be yourself?",
    "What is the adjective that best describes you, both in the past and now?",
    "What would your younger self not believe about you today?",
    "Is there a part of your family that you would let to let go of?",
    "What is your favorite childhood memory?",
    "How long does it take to become friends with you?",
    "What takes someone from a friend to a best friend for you?",
    "What question are you trying to answer in your life right now?",
    "What would you tell your younger self?",
    "What one of your actions do you most regret?",
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
