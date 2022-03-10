const url = "https://reqres.in/api/users/2";

async function getUser(event) {
  const rawRes = await fetch(url);
  const res = await rawRes.json();

  const { email } = res.data;
  document.querySelector("p").innerHTML = `<p>${email}<p>`;
}

document.querySelector("P").addEventListener("click", getUser);
