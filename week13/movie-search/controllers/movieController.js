const tmdbClient = require("../config/tmdb");

exports.searchMovies = async (req, res) => {
  try {
    const { query } = req.query;

    const response = await tmdbClient.get("/search/movie", {
      params: {
        api_key: process.env.TMDB_API_KEY,
        query,
      },
    });

    res.status(200).json({
      success: true,
      total_results: response.data.total_results,
      movies: response.data.results.map(movie => ({
        title: movie.title,
        release_date: movie.release_date,
        rating: movie.vote_average,
        overview: movie.overview,
      })),
    });

  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch data from TMDB API",
    });
  }
};
