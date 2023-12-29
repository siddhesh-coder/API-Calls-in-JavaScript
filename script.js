const apiUrl = "https://api.example.com/submit";

const form = document.querySelector("#contact-form");

const responseGive = document.querySelector("#response-msg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  const responseOption = {
    method: "POST",
    body: formData,
  };

  fetch(apiUrl, responseOption)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      responseGive.textContent = data.message;
    })
    .catch((error) => {
      console.error("Error: " + error);
    });
});
