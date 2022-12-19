function myFunction() {
  // Get the text field
  const copyText = document.getElementById("output-text");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value).then((r) => r);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}

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
      score: 10,
      link: "example.pdf",
    },
    {
      score: 10,
      link: "example.pdf",
    },
    {
      score: 10,
      link: "example.pdf",
    },
    {
      score: 10,
      link: "example.pdf",
    },
    {
      score: 10,
      link: "example.pdf",
    },
  ];

  response.map((item, index) => {
    // <h1>${item.score}</h1><p>${item.link}</p>
    const outputSelector = document.getElementsByClassName("output")[0];
    outputSelector.insertAdjacentHTML(
      "afterbegin",
      `<h1 class="output-score">${item.score}</h1><p class="output-link">${item.link}</p>`
    );
  });
};
