const key = '105719de0ffa4a3d2bc64b5b9612472f';

const requests = {
    requestPopular:
    `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US`,
    requestTopRated:
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US`,
    requestTrending:
    `https://api.themoviedb.org/3/movie/trending?api_key=${key}&language=en-US`,
    requestHorror:
    `https://api.themoviedb.org/3/movie/horror?api_key=${key}&language=en-US`,
    requestUpcoming:
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US`,
}

export default requests;