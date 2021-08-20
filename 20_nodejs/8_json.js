
// JSON
const singer = {
  name: "BTS",
  members: ["정국", "뷔", "RM", "지민"],
  songs: [
    {
      title: "작은 것들을 위한 시",
      year: 2019,
    },
    {
      title: "ON",
      year: 2020,
    },
  ],
};

// JSON object -> String (http, tcp/ip -> string)
const str = JSON.stringify(singer);
console.log(str);

//string -> object
const obj = JSON.parse(str);
console.log(obj);

//지민 출력
console.log(obj.members[3]);

console.log(obj.songs[1].title);
