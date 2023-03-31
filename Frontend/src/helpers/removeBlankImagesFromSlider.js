function removeBlankImagesFromSlider({ state = {} }) {
  return state.newMovies.data.concat(
    state.newSeries.data,
  ).filter((item) => item.backdrop_path !== null);
}

export default removeBlankImagesFromSlider;
