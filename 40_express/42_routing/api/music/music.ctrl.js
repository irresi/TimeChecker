const music = [
  { id: 1, singer: "유산슬", title: "합정역 5번 출구" },
  { id: 2, singer: "지코", title: "평범하게" },
  { id: 3, singer: "악동뮤지션", title: "크레센도" },
];
// 목록조회(localhost:3000/api/music?limit=10)
// - 성공 : limit수만큼 music 객체를 담은 배열 리턴(200: OK)
// - 실패 : limit가 숫자형이 아닌 경우 (400:Bad request)
const list = (req, res) => {
  const limit = req.query.limit || 10;
  limit = parseInt(limit, 10);

  if (Number.isNaN(limit))
    return res.status(400).end();
  
  res.json(music.slice(0, limit));
};
// 상세조회
// - 실패 : id가 숫자가 아닌 경우 (400 : Bad Request)
//          해당 id가 없는 경우 (404 : Not Found)
const detail = (req, res) => {
  const id = parseInt(req.params.id, 10); 

  if (Number.isNaN(id)) return res.status(400).end();

  const result = music.find(m => m.id === id);
  if (!result) return res.status(404).end();

  res.json(result);
};
// 등록
const create = (req, res) => {
  const { singer, title } = req.body;
  if (!singer || !title) return res.status(400).end();

  const m = { id: nextId++, singer, title };
  music.push(m);
  res.json();
};
// 수정
const update = (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).end();

  const result = music.find(m => m.id === id);
  if (!result) return res.status(404).end();

  const { singer, title } = req.body; 
  if (singer) result.singer = singer;
  if (title) result.title = title;
  res.json(result);
};
// 삭제
const remove = (req, res) => {
  res.send(`movie delete : ${req.params.id}`);
};

module.exports = { list, detail, create, update, remove };
