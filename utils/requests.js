const API_KEY = process.env.API_KEY;


const requests = {
    fetchTrending: {
        title: "Trending",
        url: `trending/all/week?api_key=${API_KEY}&language=en-us`,
    },
    fetchTopRated: {
        title: "Top Rated",
        url: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    fetchActionMovies: {
        title: "Action Movies",
        url: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`,
    },
    fetchComedyMovies: {
        title: "Comedy Movies",
        url: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`,
    },
    fetchHorrorMovies: {
        title: "Horror Movies",
        url: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27`,
    },
    fetchRomanceMovies: {
        title: "Romance Movies",
        url: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749`,
    },
    fetchDocumentries: {
        title: "Documentries",
        url: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99`,
    },
    fetchMystery: {
        title: "Mystery",
        url: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=9648`,
    },
    fetchSciFi: {
        title: "Sci-fi",
        url: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878`,
    },
    fetchAnimation: {
        title: "Animation",
        url: `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16`,
    }
}

export default requests