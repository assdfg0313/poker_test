// {card1 num}{card2 num}{type}
// aap -> ace ace pocket
// ako -> ace king off-suit
// aks -> ace king suited

const handRank = [
  "aap",
  "kkp",
  "qqp",
  "aks",
  "jjp",
  "aqs",
  "kqs",
  "ajs",
  "kjs",
  "ttp",
  "ako",
  "ats",
  "qjs",
  "kts",
  "qts",
  "jts",
  "99p",
  "aqo",
  "a9s",
  "kqo",
  "88p",
  "k9s",
  "t9s",
  "a8s",
  "q9s",
  "j9s",
  "a7o",
  "a5s",
  "77p",
  "a7s",
  "kjo",
  "a4s",
  "a3s",
  "a6s",
  "qjo",
  "66p",
  "k8s",
  "t8s",
  "a2s",
  "98s",
  "j8s",
  "ato",
  "q8s",
  "k7s",
  "kto",
  "55p",
  "jto",
  "78s",
  "qto",
  "44p",
  "33p",
  "22p",
  "k6s",
  "97s",
  "k5s",
  "76s",
  "t7s",
  "k4s",
  "k3s",
  "k2s",
  "q7s",
  "86s",
  "65s",
  "j7s",
  "54s",
  "q6s",
  "75s",
  "96s",
  "q5s",
  "64s",
  "q4s",
  "q3s",
  "t90",
  "t6s",
  "q2s",
  "a9o",
  "53s",
  "85s",
  "j6s",
  "j9o",
  "k9o",
  "j5s",
  "q9o",
  "43s",
  "74s",
  "j3s",
  "j3s",
  "95s",
  "j2s",
  "63s",
  "a8o",
  "52s",
  "t5s",
  "84s",
  "t4s",
  "t3s",
  "42s",
  "t2s",
  "98o",
  "t8o",
  "a5o",
  "a7o",
  "73s",
  "a4o",
  "32s",
  "94s",
  "93s",
  "j8o",
  "a3o",
  "62s",
  "92s",
  "k8o",
  "a6o",
  "87o",
  "q8o",
  "83s",
  "a2o",
  "82s",
  "97o",
  "72s",
  "76o",
  "k7o",
  "65o",
  "t7o",
  "k6o",
  "86o",
  "54o",
  "k5o",
  "j7o",
  "75o",
  "q7o",
  "k4o",
  "k3o",
  "96o",
  "k2o",
  "64o",
  "q6o",
  "53o",
  "85o",
  "t6o",
  "q5o",
  "43o",
  "q4o",
  "q3o",
  "74o",
  "q2o",
  "j6o",
  "63o",
  "j5o",
  "95o",
  "52o",
  "j4o",
  "j3o",
  "42o",
  "j2o",
  "84o",
  "t5o",
  "t4o",
  "32o",
  "t3o",
  "73o",
  "t2o",
  "62o",
  "94o",
  "93o",
  "92o",
  "83o",
  "82o",
  "72o",
];

const totalHands = 1326;

var sumHands = 0;
const HandList = handRank.map((v, i) => {
  var num1 = v.charAt(0);
  var num2 = v.charAt(1);

  var type = v.charAt(2);
  if (type == "p") {
    sumHands += 6;
  } else if (type == "s") {
    sumHands += 4;
  } else {
    sumHands += 12;
  }
  return {
    card: v,
    sum: (sumHands / totalHands) * 100,
  };
});

console.log(HandList);

const root = document.querySelector("#root");

const mainElFrist = `<div class="main">`;
const mainElLast = `</div>`;

const titleElFirst = `<div class="title">`;
const titleElLast = `</div>`;

const ulElFirst = `<ul>`;
const ulElLast = `</ul>`;

const liElFirst = `<li>`;
const liElLast = `</li>`;

const titleContent = `리액트를 잘하려면?`;
const howToMasterReact = [
  `자바스크립트를 잘해야 한다`,
  `CSS를 잘해야 한다`,
  `HTML을 잘해야 한다`,
];

howToMasterReact.map((v, i) => console.log(v + i));

root.innerHTML =
  mainElFrist +
  titleElFirst +
  titleContent +
  titleElLast +
  ulElFirst +
  liElFirst +
  howToMasterReact[0] +
  liElLast +
  liElFirst +
  howToMasterReact[1] +
  liElLast +
  liElFirst +
  howToMasterReact[2] +
  liElLast +
  ulElLast +
  mainElLast;
