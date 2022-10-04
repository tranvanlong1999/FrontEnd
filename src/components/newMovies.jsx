import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";
import { getMovie, saveMovie } from "./../services/fakeMovieService";

class NewMovies extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    // get data from server component Did mount
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate"),
  };
  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });
    // neu no la thang moi
    const movieId = this.props.match.params.id;
    console.log("movieID " + movieId);
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    // nếu sử dụng push ở đây thì khi back lại sẽ sai movie Id và lại redirect sang not found rồi bị lặp vô tận
    if (!movie) return this.props.history.replace("/not-found");
    // không nên cho rằng nếu bạn return ở trên phần bên dưới này sẽ không thể thực hiện
    //{Dont assume that just because we are redirecting the users somewhere eles the rest of this method will not be executed}
    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }
  doSubmit = () => {
    saveMovie(this.state.data);
    this.props.history.push("/movies");
  };
  render() {
    return (
      <div>
        <h1> New Movies</h1>
        <form onSubmit={this.handleSumit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default NewMovies;
