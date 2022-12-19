const sendRequest = () => {
  /** TODO
   *  1) run python code
   *  2) take response
   *  3) parse response
   *  4) update ui ✅
   */

  //   4) update ui

  const response = [
    {
      serialNum: 1,
      score: 90,
      link: "example1.pdf",
    },
    {
      serialNum: 2,
      score: 80,
      link: "example2.pdf",
    },
    {
      serialNum: 3,
      score: 70,
      link: "example3.pdf",
    },
    {
      serialNum: 4,
      score: 60,
      link: "example4.pdf",
    },
    {
      serialNum: 5,
      score: 50,
      link: "example5.pdf",
    },
  ];

  response.map((item, index) => {
    const outputSelector = document.getElementsByClassName("output")[0];
    outputSelector.insertAdjacentHTML(
      "beforeend",
      `<th class="output-serialNum">${item.serialNum}</th><th class="output-link">${item.link}</th><th class="output-score">${item.score}</th>`
    );
  });
};
