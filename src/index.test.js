import imdbMovies from '.'

const movie  = new imdbMovies();

test('says hello', () => (
  expect(movie.hello()).toBe("hello world")
))
