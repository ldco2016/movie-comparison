beforeEach(() => {
  document.querySelector('#target').innerHTML = "";
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
});

it("Dropdown starts closed", () => {
  const dropdown = document.querySelector('.dropdown');
  expect(dropdown.className).not.to.include('is-active');
});

it("After searching, dropdown opens up", () => {
  const input = document.querySelector("input");
  // set the value
  input.value = 'avengers';
  // trigger the event
  input.dispatchEvent(new Event("input"));

  const dropdown = document.querySelector('.dropdown');
  expect(dropdown.className).to.include('is-active');
});
