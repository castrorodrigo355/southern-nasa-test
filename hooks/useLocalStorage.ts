import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, defaultValue: Array<number>) {
  const [favorites, setFavorites] = useState<Array<T>>(() => {
    let currentData;
    try {
      currentData = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      currentData = defaultValue;
    }
    return currentData;
  });

  const onClickFavorite = (item: T): void => {
    let currentFavorites = favorites;
    const index = favorites.indexOf(item);
    currentFavorites =
      index === -1
        ? [...currentFavorites, item]
        : currentFavorites.filter((x) => x !== item);
    setFavorites(currentFavorites);
  };

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(favorites));
  }, [favorites, key]);

  return {
    favorites,
    setFavorites,
    onClickFavorite,
  };
}
