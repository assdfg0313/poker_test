const handList = [
  {
    card: "aap",
    sum: 0.4524886877828055,
  },
  {
    card: "kkp",
    sum: 0.904977375565611,
  },
  {
    card: "qqp",
    sum: 1.3574660633484164,
  },
  {
    card: "aks",
    sum: 1.6591251885369533,
  },
  {
    card: "jjp",
    sum: 2.1116138763197587,
  },
  {
    card: "aqs",
    sum: 2.413273001508296,
  },
  {
    card: "kqs",
    sum: 2.7149321266968327,
  },
  {
    card: "ajs",
    sum: 3.0165912518853695,
  },
  {
    card: "kjs",
    sum: 3.3182503770739067,
  },
  {
    card: "ttp",
    sum: 3.770739064856712,
  },
  {
    card: "ako",
    sum: 4.675716440422323,
  },
  {
    card: "ats",
    sum: 4.97737556561086,
  },
  {
    card: "qjs",
    sum: 5.279034690799397,
  },
  {
    card: "kts",
    sum: 5.580693815987934,
  },
  {
    card: "qts",
    sum: 5.88235294117647,
  },
  {
    card: "jts",
    sum: 6.184012066365008,
  },
  {
    card: "99p",
    sum: 6.636500754147813,
  },
  {
    card: "aqo",
    sum: 7.541478129713424,
  },
  {
    card: "a9s",
    sum: 7.8431372549019605,
  },
  {
    card: "kqo",
    sum: 8.74811463046757,
  },
  {
    card: "88p",
    sum: 9.200603318250378,
  },
  {
    card: "k9s",
    sum: 9.502262443438914,
  },
  {
    card: "t9s",
    sum: 9.803921568627452,
  },
  {
    card: "a8s",
    sum: 10.105580693815988,
  },
  {
    card: "q9s",
    sum: 10.407239819004525,
  },
  {
    card: "j9s",
    sum: 10.708898944193061,
  },
  {
    card: "a7o",
    sum: 11.613876319758672,
  },
  {
    card: "a5s",
    sum: 11.91553544494721,
  },
  {
    card: "77p",
    sum: 12.368024132730016,
  },
  {
    card: "a7s",
    sum: 12.669683257918551,
  },
  {
    card: "kjo",
    sum: 13.574660633484163,
  },
  {
    card: "a4s",
    sum: 13.8763197586727,
  },
  {
    card: "a3s",
    sum: 14.177978883861236,
  },
  {
    card: "a6s",
    sum: 14.479638009049776,
  },
  {
    card: "qjo",
    sum: 15.384615384615385,
  },
  {
    card: "66p",
    sum: 15.837104072398189,
  },
  {
    card: "k8s",
    sum: 16.138763197586727,
  },
  {
    card: "t8s",
    sum: 16.440422322775262,
  },
  {
    card: "a2s",
    sum: 16.7420814479638,
  },
  {
    card: "98s",
    sum: 17.043740573152338,
  },
  {
    card: "j8s",
    sum: 17.345399698340874,
  },
  {
    card: "ato",
    sum: 18.250377073906485,
  },
  {
    card: "q8s",
    sum: 18.552036199095024,
  },
  {
    card: "k7s",
    sum: 18.85369532428356,
  },
  {
    card: "kto",
    sum: 19.75867269984917,
  },
  {
    card: "55p",
    sum: 20.211161387631975,
  },
  {
    card: "jto",
    sum: 21.116138763197586,
  },
  {
    card: "78s",
    sum: 21.417797888386122,
  },
  {
    card: "qto",
    sum: 22.322775263951737,
  },
  {
    card: "44p",
    sum: 22.77526395173454,
  },
  {
    card: "33p",
    sum: 23.227752639517345,
  },
  {
    card: "22p",
    sum: 23.68024132730015,
  },
  {
    card: "k6s",
    sum: 23.981900452488688,
  },
  {
    card: "97s",
    sum: 24.283559577677224,
  },
  {
    card: "k5s",
    sum: 24.58521870286576,
  },
  {
    card: "76s",
    sum: 24.8868778280543,
  },
  {
    card: "t7s",
    sum: 25.188536953242835,
  },
  {
    card: "k4s",
    sum: 25.49019607843137,
  },
  {
    card: "k3s",
    sum: 25.791855203619914,
  },
  {
    card: "k2s",
    sum: 26.09351432880845,
  },
  {
    card: "q7s",
    sum: 26.395173453996986,
  },
  {
    card: "86s",
    sum: 26.69683257918552,
  },
  {
    card: "65s",
    sum: 26.998491704374057,
  },
  {
    card: "j7s",
    sum: 27.300150829562593,
  },
  {
    card: "54s",
    sum: 27.601809954751133,
  },
  {
    card: "q6s",
    sum: 27.90346907993967,
  },
  {
    card: "75s",
    sum: 28.205128205128204,
  },
  {
    card: "96s",
    sum: 28.50678733031674,
  },
  {
    card: "q5s",
    sum: 28.808446455505276,
  },
  {
    card: "64s",
    sum: 29.11010558069382,
  },
  {
    card: "q4s",
    sum: 29.411764705882355,
  },
  {
    card: "q3s",
    sum: 29.71342383107089,
  },
  {
    card: "t90",
    sum: 30.618401206636502,
  },
  {
    card: "t6s",
    sum: 30.920060331825038,
  },
  {
    card: "q2s",
    sum: 31.221719457013574,
  },
  {
    card: "a9o",
    sum: 32.126696832579185,
  },
  {
    card: "53s",
    sum: 32.42835595776772,
  },
  {
    card: "85s",
    sum: 32.73001508295626,
  },
  {
    card: "j6s",
    sum: 33.03167420814479,
  },
  {
    card: "j9o",
    sum: 33.93665158371041,
  },
  {
    card: "k9o",
    sum: 34.841628959276015,
  },
  {
    card: "j5s",
    sum: 35.14328808446455,
  },
  {
    card: "q9o",
    sum: 36.048265460030166,
  },
  {
    card: "43s",
    sum: 36.3499245852187,
  },
  {
    card: "74s",
    sum: 36.65158371040724,
  },
  {
    card: "j3s",
    sum: 36.95324283559578,
  },
  {
    card: "j3s",
    sum: 37.254901960784316,
  },
  {
    card: "95s",
    sum: 37.55656108597285,
  },
  {
    card: "j2s",
    sum: 37.85822021116139,
  },
  {
    card: "63s",
    sum: 38.159879336349924,
  },
  {
    card: "a8o",
    sum: 39.06485671191554,
  },
  {
    card: "52s",
    sum: 39.366515837104075,
  },
  {
    card: "t5s",
    sum: 39.66817496229261,
  },
  {
    card: "84s",
    sum: 39.969834087481146,
  },
  {
    card: "t4s",
    sum: 40.27149321266968,
  },
  {
    card: "t3s",
    sum: 40.57315233785822,
  },
  {
    card: "42s",
    sum: 40.874811463046754,
  },
  {
    card: "t2s",
    sum: 41.17647058823529,
  },
  {
    card: "98o",
    sum: 42.081447963800905,
  },
  {
    card: "t8o",
    sum: 42.98642533936652,
  },
  {
    card: "a5o",
    sum: 43.89140271493213,
  },
  {
    card: "a7o",
    sum: 44.79638009049774,
  },
  {
    card: "73s",
    sum: 45.09803921568628,
  },
  {
    card: "a4o",
    sum: 46.003016591251885,
  },
  {
    card: "32s",
    sum: 46.30467571644042,
  },
  {
    card: "94s",
    sum: 46.60633484162896,
  },
  {
    card: "93s",
    sum: 46.90799396681749,
  },
  {
    card: "j8o",
    sum: 47.81297134238311,
  },
  {
    card: "a3o",
    sum: 48.717948717948715,
  },
  {
    card: "62s",
    sum: 49.01960784313725,
  },
  {
    card: "92s",
    sum: 49.321266968325794,
  },
  {
    card: "k8o",
    sum: 50.2262443438914,
  },
  {
    card: "a6o",
    sum: 51.13122171945701,
  },
  {
    card: "87o",
    sum: 52.03619909502263,
  },
  {
    card: "q8o",
    sum: 52.94117647058824,
  },
  {
    card: "83s",
    sum: 53.242835595776775,
  },
  {
    card: "a2o",
    sum: 54.14781297134238,
  },
  {
    card: "82s",
    sum: 54.44947209653092,
  },
  {
    card: "97o",
    sum: 55.35444947209653,
  },
  {
    card: "72s",
    sum: 55.65610859728507,
  },
  {
    card: "76o",
    sum: 56.56108597285068,
  },
  {
    card: "k7o",
    sum: 57.466063348416284,
  },
  {
    card: "65o",
    sum: 58.371040723981906,
  },
  {
    card: "t7o",
    sum: 59.276018099547514,
  },
  {
    card: "k6o",
    sum: 60.18099547511312,
  },
  {
    card: "86o",
    sum: 61.085972850678736,
  },
  {
    card: "54o",
    sum: 61.990950226244344,
  },
  {
    card: "k5o",
    sum: 62.89592760180995,
  },
  {
    card: "j7o",
    sum: 63.80090497737556,
  },
  {
    card: "75o",
    sum: 64.70588235294117,
  },
  {
    card: "q7o",
    sum: 65.61085972850678,
  },
  {
    card: "k4o",
    sum: 66.51583710407239,
  },
  {
    card: "k3o",
    sum: 67.42081447963801,
  },
  {
    card: "96o",
    sum: 68.32579185520362,
  },
  {
    card: "k2o",
    sum: 69.23076923076923,
  },
  {
    card: "64o",
    sum: 70.13574660633483,
  },
  {
    card: "q6o",
    sum: 71.04072398190046,
  },
  {
    card: "53o",
    sum: 71.94570135746606,
  },
  {
    card: "85o",
    sum: 72.85067873303167,
  },
  {
    card: "t6o",
    sum: 73.7556561085973,
  },
  {
    card: "q5o",
    sum: 74.6606334841629,
  },
  {
    card: "43o",
    sum: 75.56561085972851,
  },
  {
    card: "q4o",
    sum: 76.47058823529412,
  },
  {
    card: "q3o",
    sum: 77.37556561085974,
  },
  {
    card: "74o",
    sum: 78.28054298642535,
  },
  {
    card: "q2o",
    sum: 79.18552036199095,
  },
  {
    card: "j6o",
    sum: 80.09049773755656,
  },
  {
    card: "63o",
    sum: 80.99547511312217,
  },
  {
    card: "j5o",
    sum: 81.90045248868778,
  },
  {
    card: "95o",
    sum: 82.80542986425338,
  },
  {
    card: "52o",
    sum: 83.710407239819,
  },
  {
    card: "j4o",
    sum: 84.61538461538461,
  },
  {
    card: "j3o",
    sum: 85.52036199095022,
  },
  {
    card: "42o",
    sum: 86.42533936651584,
  },
  {
    card: "j2o",
    sum: 87.33031674208145,
  },
  {
    card: "84o",
    sum: 88.23529411764706,
  },
  {
    card: "t5o",
    sum: 89.14027149321268,
  },
  {
    card: "t4o",
    sum: 90.04524886877829,
  },
  {
    card: "32o",
    sum: 90.9502262443439,
  },
  {
    card: "t3o",
    sum: 91.8552036199095,
  },
  {
    card: "73o",
    sum: 92.76018099547511,
  },
  {
    card: "t2o",
    sum: 93.66515837104072,
  },
  {
    card: "62o",
    sum: 94.57013574660633,
  },
  {
    card: "94o",
    sum: 95.47511312217195,
  },
  {
    card: "93o",
    sum: 96.38009049773756,
  },
  {
    card: "92o",
    sum: 97.28506787330316,
  },
  {
    card: "83o",
    sum: 98.19004524886877,
  },
  {
    card: "82o",
    sum: 99.09502262443439,
  },
  {
    card: "72o",
    sum: 100,
  },
];

const getRankOfHands = (value) => {
  for (let i = 0; i < handList.length; i++) {
    if (handList[i].card == value) {
      return handList[i].sum;
    }
  }
  return "";
};

const QUOTES = "quotes";

const time = document.querySelector(".time");
const searchContainer = document.querySelector(".searchContainer");
const searchResult = document.querySelector(".searchResult");
const resultText = document.querySelector(".resultText");
const resultCard = document.querySelector(".resultCard");

function getTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  time.innerText = `${hours}:${minutes}:${seconds}`;
}
const qoutesList = [
  `한판 보다, n판의 평균이 중요하다.\n인생은 n번의 인피니티 게임이다.`,
  `이겼다고 좋아하고, 졌다고 화내는 포커는 리스크가 크다.\n일희일비 하지 않는 자세가 중요하다.`,
  `풀하우스로 포카드에 질 수 있다.\n나의 최선이 꼭 세상에 닿는다는 보장은 없다.`,
  `상대 패를 하나로 예측하는 것이 아니라, 핸드 레인지를 예상하라.\n단편적인 사고가 아닌, 입체적인 사고로 세상을 바라보아라.`,
  `말보다는 상대의 베팅을 보아라.\n인생은 말보다 행동이다.`,
];

function getQuotes() {
  const quotePart = document.querySelector(".quotePart");

  quotePart.innerText =
    qoutesList[Math.floor(Math.random() * qoutesList.length)];
}
function getCardHtml(value) {
  var num1 = value.charAt(0);
  var num2 = value.charAt(1);
  var type = value.charAt(2);
  var shape1 = "s";
  var shape2 = "s";

  if (type == "o") {
    shape2 = "d";
  }

  return `<img src='card/${shape1}${num1}.png' /><img src='card/${shape2}${num2}.png' />`;
}

getTime();
getQuotes();
setInterval(() => {
  getTime();
}, 1000);
setInterval(() => {
  getQuotes();
}, 10000);

searchResult.style.display = "none";

function onClickSearch() {
  if (!searchContainer.value) {
    return;
  }

  const value = searchContainer.value;
  var result = getRankOfHands(value);
  console.log(result);
  searchResult.style.display = "inline";
  if (result == "") {
    resultText.innerHTML = "값을 제대로 넣어주세요!";
    resultCard.style.display = "none";
    return;
  }
  resultCard.style.display = "flex";
  resultText.innerHTML =
    value + " 는 상위 " + result.toFixed(2) + " % 핸드 입니다.";
  resultCard.innerHTML = getCardHtml(value);
}

function onClickToggleNft(value) {
  const nft = document.querySelector(".nft");
  const nftView = document.querySelector(".nftView");

  if (value) {
    nft.style.display = "inline-block";
    nftView.style.display = "none";
  } else {
    nft.style.display = "none";
    nftView.style.display = "inline-block";
  }
}
