let nextId = 4;
let movie = [
  { id: 1, movies: "스타워즈", director: "조지 루카스" }, //, 가 조지 루카스 뒤에 있어서 에러남.
  { id: 2, movies: "아바타", director: "제임스 카메론" },
  { id: 3, movies: "인터스텔라", director: "크리스토퍼 놀란" }
];
// 목록조회(localhost:3000/api/movie?limit=10)
// - 성공 : limit수만큼 movie 객체를 담은 배열 리턴(200: OK)
// - 실패 : limit가 숫자형이 아닌 경우 (400:Bad request)
const list = (req, res) => {
  res.json(movie);
  const limit = req.query.limit || 10;
  limit = parseInt(limit, 10);

  if (Number.isNaN(limit))
    return res.status(400).end();
  
  res.json(movie);
};
// 상세조회
// - 실패 : id가 숫자가 아닌 경우 (400 : Bad Request)
//          해당 id가 없는 경우 (404 : Not Found)
const detail = (req, res) => {
  const id = parseInt(req.params.id, 10); 

  if (Number.isNaN(id)) return res.status(400).end();

  const result = movie.find(m => m.id === id);
  if (!result) return res.status(404).end();

  res.json(result);
};
// 등록
const create = (req, res) => {
  console.log('create');
  const { movies, director } = req.body;
  if (!movies || !director) return res.status(400).end();

  const m = { id: nextId++, movies, director };
  movie.push(m);
  res.json(m);

};
// 수정
const update = (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();

  const result = movie.find(m => m.id === id);
  if (!result) return res.status(404).end();

  const { movies, director } = req.body; 
  if (movies) result.movies = movies;
  if (director) result.director = director;
  res.json(result);
};
// 삭제
// 삭제
// - 성공 : 삭제 후 결과 배열 리턴 (200 : OK)
// - 실패 : id가 숫자가 아닐 경우 400 응답 (400 : Bad Request)
const remove = (req, res) => {
  // 127.0.0.1:3000/users/1
  const id = parseInt(req.params.id, 10);

  if (Number.isNaN(id)) {
    return res.status(400).end();
  }

  movie = movie.filter((m) => m.id !== id);
  res.status(200).json(movie);
};

module.exports = { list, detail, create, update, remove };
