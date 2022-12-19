async function sendRequest() {
  event.preventDefault();
  /** TODO
   *  1) call api ✅
   *  2) take response ✅
   *  3) parse response ✅
   *  4) update ui ✅
   */

  // 1) call api

  const buttonSpan = document.getElementsByClassName("submit-button-span")[0];
  buttonSpan.style.display = "none";
  const loaderDiv = document.getElementsByClassName("loader")[0];
  loaderDiv.style.display = "inline-block";

  const mainBody = document.getElementsByTagName("body")[0];

  const API_URL = "http://127.0.0.1:5000/query";

  // 2) take response
  const response = async (description) => {
    const response = await fetch(`${API_URL}?description=${description}`);

    loaderDiv.style.display = "none";
    buttonSpan.style.display = "inline-block";
    mainBody.style.height = "230vh";

    // 3) parse response
    const data = response.json();
    return data;
  };

  //   4) update ui

  // const description = document.getElementsByClassName("query_text")[0].value;
  const formDetails = document.getElementsByClassName("query_text")[0];
  const description = formDetails.value;

  const outputSelector = document.getElementsByClassName("output")[0];

  response(description).then((data) => {
    data.map((item, index) => {
      outputSelector.insertAdjacentHTML(
        "beforeend",
        `<a class="card"
        target="_blank" href="../server/${item.pdf_path}">
        <img
          alt="resume image"
          class="card-image"
          height="250"
          width="175"
          src="../server/${item.image_path}"
        />
      </a>`
      );
    });
  });
}

function auto_grow(element) {
  element.style.height = element.scrollHeight + "px";
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
