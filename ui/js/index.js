async function sendRequest() {
  event.preventDefault();
  /** TODO
   *  1) call api ✅
   *  2) take response ✅
   *  3) parse response ✅
   *  4) update ui ✅
   */

  // 1) call api

  const API_URL = "http://127.0.0.1:5000/query";

  // 2) take response
  const response = async (description) => {
    const response = await fetch(`${API_URL}?description=${description}`);

    // 3) parse response
    // const data = await response.json();
    return response;
  };

  //   4) update ui

  // const description = document.getElementsByClassName("query_text")[0].value;
  const formDetails = document.getElementsByClassName("query_text")[0];
  const description = formDetails.value;

  const outputSelector = document.getElementsByClassName("output")[0];

  // remove output message
  document.getElementsByClassName("initial_content")[0]?.remove();

  const data = await response(description);
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
}

function auto_grow(element) {
  element.style.height = element.scrollHeight + "px";
}
