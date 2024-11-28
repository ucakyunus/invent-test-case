import { type IMovieParameter } from "@/types/movie";

export const objectToQueryString = (data: IMovieParameter) => {
  return Object.entries(data)
    .map(
      ([key, value]: [key: string, value: string]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join("&");
};

export const debounce = <F extends (...args: never[]) => void>(
  func: F,
  wait: number,
): F => {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<F>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  }) as F;
};
