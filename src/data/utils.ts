export const shuffleArray = (array: any[]) => {
  // copy the array and sort them
  return [...array].sort(() => Math.random() - 0.5);
};

/*
--- Fisher–Yates shuffle ---

const shuffle = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
*/
