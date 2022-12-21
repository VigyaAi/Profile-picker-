function sendRequest() {
  event.preventDefault();
  /** TODO
   *  1) call api ✅
   *  2) take response ✅
   *  3) parse response ✅
   *  4) update ui ✅
   */

  // 1) call api

  const submitButton = document.getElementsByClassName("submit-button")[0];
  submitButton.style.display = "none";
  const loaderButton = document.getElementsByClassName("loader")[0];
  loaderButton.style.display = "flex";


  const mainBody = document.getElementsByTagName("body")[0];

  const API_URL = "http://127.0.0.1:5000/query";

  // 2) take response
  const response = async (description) => {
    const response = await fetch(`${API_URL}?description=${description}`);

    loaderButton.style.display = "none";
    // buttonSpan.style.display = "inline-block";
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
     submitButton.style.display = "inline-block";
     loaderButton.style.display = "none";

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
