/**
 * Fisher-Yates shuffle algorithm to randomize an array in place
 * @param array The array to shuffle
 * @returns The same array, now shuffled
 */
export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]; // Create a copy to avoid mutating the original
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
