// capitalize words of the sentence

function capitalizeWords(str) {
  const words = str.split(" ").map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });
  return words.join(" ");
}

console.log(capitalizeWords("I got up early today"));
