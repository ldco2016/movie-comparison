it("shows an autocomplete widget", () => {
  createAutoComplete({
    root: document.querySelector("#target"),
    fetchData() {
      return [
        {Title: "Avengers"},
        {Title: "Terrific Toddlers"},
        {Title: "Boss Baby"}
      ];
    },
    renderOption(movie) {
      return movie.Title;
    }
  });

  const dropdown = document.querySelector('.dropdown');
  expect(dropdown.className).not.to.include('is-active');
});
