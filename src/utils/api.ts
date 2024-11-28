import { objectToQueryString } from "@/utils";
import { type IMovieParameter } from "@/types/movie";

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchData = async <T>(query: IMovieParameter): Promise<T> => {
  try {
    const path = `${BASE_URL}/?apikey=${API_KEY}&${objectToQueryString(query)}`;

    const response = await fetch(path);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await response.json();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch data");
  }
};
