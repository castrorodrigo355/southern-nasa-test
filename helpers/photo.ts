export const isFavorite = (favorites: Array<number>, id: number): boolean =>
  favorites.some((d) => d === id);
