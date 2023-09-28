import { API_KEY } from "./constants/constants";

export const top_rated=`movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
export const originals=`discover/tv?api_key=${API_KEY}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`;
export const action=`/discover/movie?api_key=${API_KEY}&with_genres=28`;