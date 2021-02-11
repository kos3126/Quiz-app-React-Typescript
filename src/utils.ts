export const shuffleArray = (array: unknown[]) => {
  // copy the array and sort them
  return [...array].sort(() => Math.random() - 0.5);
};
