export const prerender = false;
export async function GET({ params, request }) {
  const questions = [
    "Are you lying to yourself about anything?",
    "What questions are you trying to answer most in your life right now?",
    "What's been your happiest memory this past year?",
    "What do you crave more of?",
    "Have you changed your mind about anything recently?",
    "What has been your earliest recollection of happiness?",
    "What lesson took you the longest to unlearn?",
    "When was the last time you surprised yourself?",
    "Has a stranger ever changed your life?",
    "What insecurity of yours holds you back the most?",
    "If you had to choose a song that represents me, what would it be and why?",
    "What are you feeling a lot of today?",
    "What limiting belief is holding you back the most right now?",
    "What are you not currently giving enough time to?",
    "Finish the sentence: Strangers would describe me as ________ only I know that I am _________.",
    "How could you become a better person?",
    "What title would you give this chapter in your life?",
    "What's the worst pain you have ever been in that wasn't physical?",
    "What is something you wouldn't want to change about yourself?",
    "What would your younger self not believe about your life today?",
    "What's your mom's name and what is the most beautiful thing about her?",
    "What are you more afraid of failure or success? Why?",
    "What is a dream you let go of?",
    "What fast food restaurant do you think I'm most likely to drive through? What's my order?",
    "If you could get to know someone in your life on a deeper level who would it be and why?",
    "What have you been hiding all those years?",
    "What part of your life works, and what part of your life hurts?",
    "Do you think the image you have of yourself matches the image other people see you as?",
    "What's the nicest thing a friend (or partner) has ever done for you?",
    "Are you missing anyone right now? Do you think they miss you too?",
    "When you are asked how are you, how often do you answer truthfully?",
    "How are you, really?",
    "What's your least favorite question to be asked on a date? What do you wish you would be asked more?",
    "What's the most unexplainable thing that happened to you?",
    "What's your father's name? And tell me one thing about him.",
    "Describe your perfect day!",
    "What's a goal or dream of mine you want to see me achieve?",
    "How old do you feel emotionally?",
    "What are you passionate about?",
    "Who's your comfort person?",
    "If you could have it your way: who would you be with? Where would you be? What would you be doing?",
  ];

  const randomQuestion =
    questions[Math.floor(Math.random() * questions.length)];
  return new Response(
    JSON.stringify({
      question: randomQuestion,
    }),
  );
}
