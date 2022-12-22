function sendRequest() {
  event.preventDefault();
  
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
    mainBody.style.height = "230vh";

    // 3) parse response
    const data = response.json();
    return data;
  };

  //   4) update ui

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
  // const submitButton = document.getElementsByClassName("submit-button")[0];

  // const query = document.getElementsByClassName("query_text")[0];
  // if ((query.value && event && event.keyCode === 13) || event === 0) {
  //   submitButton.click();
  // }

  element.style.height = 'auto';
  element.style.height = element.scrollHeight + "px";
}

// Voice to Text :

click_to_record.addEventListener('click',function(){
  var speech = true;
  window.SpeechRecognition = window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.interimResults = true;

  recognition.addEventListener('result', e => {
      const transcript = Array.from(e.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('')

      document.getElementById("convert_text").innerHTML = transcript;
      console.log(transcript);
  });
  
  if (speech == true) {
      recognition.start();
  }
})