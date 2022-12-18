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
