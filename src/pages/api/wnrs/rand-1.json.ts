export const prerender = false;
export async function GET({ params, request }) {
  const questions = [
    "What do you think my major is?",
    "Do you think I've ever been in love?",
    "Do you think I've ever had my heart broken?",
    "Do you think I've ever been fired?",
    "Do you think I was popular in high school?",
    "What do you think I would prefer? Hot Cheetos or onion rings?",
    "Do you think I like being a couch potato?",
    "Do you think I am an extrovert?",
    "Do you think I have a sibling? Older or younger?",
    "Where do you think I grew up?",
    "Do you think I mostly cooking or get takeout?",
    "What do you think I've been watching lately?",
    "Do you think I hate waking up early?",
    "What is the nicest thing you remember doing for a friend?",
    "What type of social situation makes you feel the most awkward?",
    "Who do you think is my favorite idol?",
    "When do I usually have dinner?",
    "Do you think I like wearing red?",
    "What do you think is my favorite dish?",
    "What do you think my dream career is?",
    "What do you think my dream vacation is?",
    "Do you think I was bullied in school?",
    "Do you think I am a talkative person?",
    "Do you think I enjoy reading?",
    "How much do you think I value alone time?",
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
