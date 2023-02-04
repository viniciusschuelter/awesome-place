export const colorsByRating = (rating: number): string => {
  if (rating >= 4) return 'green-500';
  if (rating >= 3.5) return 'lime-500';
  if (rating >= 3) return 'yellow-500';
  if (rating >= 2.5) return 'amber-500';
  if (rating >= 2) return 'orange-500';
  return 'red-500';
};
