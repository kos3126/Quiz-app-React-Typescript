export const shuffleArray = (array: any[]) => {
  // copy the array and sort them
  return [...array].sort(() => Math.random() - 0.5);
};
