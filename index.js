const url = "https://reqres.in/api/users/2";

function getUser() {
  fetch(url)
    .then((rawRes) => rawRes.json())
    .then((res) => {
      const { email } = res.data;
      document.querySelector("p").innerHTML = `<p>${email}<p>`;
    });
}

document.querySelector("P").addEventListener("click", getUser);
