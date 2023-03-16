const apiKey = "EBwrWJoCYSyHkNPSYazCnwbF6JBOuQaJxGX0hLvH61faYKrCEsXFWPEr";
let tigers = "tigers";

const url = "https://api.pexels.com/v1/search?query=" + tigers;

const token = {
  headers: {
    Authorization: apiKey,
  },
};
const primobottone = document.getElementById("loadPrimary");

const secondobottone = document.getElementById("loadSecondary");

primobottone.addEventListener("click", async () => {
  try {
    const resp = await fetch(url, token);
  } catch (error) {
    alert("error");
  }
});
