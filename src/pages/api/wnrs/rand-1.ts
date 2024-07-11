export const prerender = false;
export async function GET({ params, request }) {
  const questions = [
    "What do you think my major is?",
    "Do you think I've ever been in love?",
    "Do you think I've ever had my heart broken?",
    "Do you think I've ever been fired?",
    "Do you think I was popular in high school?",
    "What do you think I will prefer? Hot Cheetos or onion rings?",
    "Do you think I like being a couch potato?",
    "Do you think I am an extrovert?",
    "Do you think I have a sibling? Older or younger?",
    "Where do you think I grew up?",
    "Do you think I am mainly cooking or getting takeout?",
    "What do you think I have been binge-watching lately?",
    "Do you think I hate waking up early?",
    "What is the nicest thing you can remember doing for a friend?",
    "What type of social situation makes you feel the most awkward?",
    "Who do you think is my favorite idol?",
    "When do I usually have dinner?",
    "Do you think I like wearing red?",
    "What do you think is my favorite dish?",
    "Do you think I'm in Greek life?",
    "Do you know what my dream career is?",
    "Do you know where my dream vacation is?",
    "Do you think I used to be bullied in school?",
    "Do you think I am a talkative person?",
    "Do you think I am a cold fish?",
    "What do you think my favorite Starbucks drink is?",
    "Do you think I love reading books?",
    "When do you think I most usually like to stay alone?",
    "Which part of a house do you think is my favorite place?",
    "Do you think I like playing video games?",
  ];
  const randomQuestion =
    questions[Math.floor(Math.random() * questions.length)];
  return new Response(
    JSON.stringify({
      question: randomQuestion,
    }),
  );
}
