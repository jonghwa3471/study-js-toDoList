const quotes = [
  {
    quote: "깨지고 부서져라. 다 내려놓고 인정하면 그만큼 성장하는 거야",
    author: "우왁굳",
  },
  {
    quote: "세상은 맞냐 틀리냐로 돌아가지 않는다.",
    author: "우왁굳",
  },
  {
    quote: "어깨를 펴고 당당히 살아. 넌 멋있는 놈이야.",
    author: "우왁굳",
  },
  {
    quote: "너의 장점을 찾아주는 사람을 만나라.",
    author: "우왁굳",
  },
  {
    quote: "남을 알 수 있는 사람은 없다.",
    author: "우왁굳",
  },
  {
    quote: "의견을 조율할 때 다투는 건 당연하다. 무서워서 피하면 안돼.",
    author: "우왁굳",
  },
  {
    quote: "인생은 지나고 나서야 깨닫는다.",
    author: "우왁굳",
  },
  {
    quote: "인생이 나락으로 갈 때 국뽕 영상이 달게 느껴진다.",
    author: "우왁굳",
  },
  {
    quote: "재능은 어느 날 발견되는거지 내가 가꾸는 게 아니다.",
    author: "우왁굳",
  },
  {
    quote: "두려움의 크기가 커질수록 건축의 크기가 커진다.",
    author: "우왁굳",
  },
];

const quote = document.querySelector("#quote div:first-child span");
const author = document.querySelector("#quote div:last-child span");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
